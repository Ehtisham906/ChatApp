import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create(
    persist(
        (set, get) => ({
            messages: [],
            users: [],
            selectedUser: null,
            isUsersLoading: false,
            isMessagesLoading: false,
            unreadMessages: [],

            getUsers: async () => {
                set({ isUsersLoading: true });
                try {
                    const res = await axiosInstance.get("/messages/users");
                    set({ users: res.data });
                } catch (error) {
                    toast.error(error.response.data.message);
                } finally {
                    set({ isUsersLoading: false });
                }
            },

            getMessages: async (userId) => {
                set({ isMessagesLoading: true });
                try {
                    const res = await axiosInstance.get(`/messages/${userId}`);
                    set({ messages: res.data });
                } catch (error) {
                    toast.error(error.response.data.message);
                } finally {
                    set({ isMessagesLoading: false });
                }
            },

            sendMessage: async (messageData) => {
                const { selectedUser, messages } = get();
                if (!selectedUser) {
                    toast.error("No user selected");
                    return;
                }
                try {
                    const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
                    set({ messages: [...messages, res.data] });
                } catch (error) {
                    console.error("Error sending message:", error);
                    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
                    toast.error(errorMessage);
                }
            },

            subscribeToMessages: () => {
                const socket = useAuthStore.getState().socket;

                socket.on("newMessage", (newMessage) => {
                    const { unreadMessages, selectedUser, messages } = get();
                    if (selectedUser?._id === newMessage.senderId) {
                        set({ messages: [...messages, newMessage] });
                    } else { 
                        set({
                            unreadMessages: [...unreadMessages, newMessage],
                        });
                    }

                    toast.success(`New message from ${newMessage.senderName.toUpperCase() || "a user"}`, {
                        duration: 8000, 
                    });
                });
            },

            clearUnreadMessages: (userId) => {
                const { unreadMessages } = get();
                set({
                    unreadMessages: unreadMessages.filter((msg) => msg.senderId !== userId),
                });
            },

            unsubscribeFromMessages: () => {
                const socket = useAuthStore.getState().socket;
                socket.off("newMessage");
            },

            setSelectedUser: (selectedUser) => { 
                get().clearUnreadMessages(selectedUser._id);
                set({ selectedUser });
            },
            closeChat: (selectedUser) => set({ selectedUser }),
        }),
        {
            name: "chat-store",  
            partialize: (state) => ({ unreadMessages: state.unreadMessages }), 
        }
    )
);
