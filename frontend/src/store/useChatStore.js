import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

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
            toast.error("no user selectted")
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

    newMessage: async () => {
        try {
            const res = await axiosInstance.get(`/messages`);
            console.log("new message", res.data);
        } catch (error) {

        }
    },


    // subscribeToMessages: () => {
    //     const socket = useAuthStore.getState().socket;

    //     socket.on("newMessage", (newMessage) => {
    //         const { selectedUser, messages } = get();

    //         // Show a toast notification for the new message
    //         toast.success(`New message from ${newMessage.senderName.toUpperCase() || "a user"}`, {
    //             duration: 8000, // Duration in milliseconds (8 seconds)
    //         });

    //         // If no user is selected or the sender isn't the selected user, just show the toast
    //         if (!selectedUser || newMessage.senderId !== selectedUser._id) return;

    //         // Update messages if the new message is from the selected user
    //         set({ messages: [...messages, newMessage] });
    //     });
    // },
    subscribeToMessages: () => {
        const socket = useAuthStore.getState().socket;

        socket.on("newMessage", (newMessage) => {
            const { selectedUser, unreadMessages } = get();
            toast.success(`New message from ${newMessage.senderName.toUpperCase() || "a user"}`, {
                duration: 8000, // Duration in milliseconds (8 seconds)
            });

            // Update the `unreadMessages` state
            set({
                unreadMessages: {
                    ...unreadMessages,
                    [newMessage.senderId]: true, // Mark this sender as having unread messages
                },
            });
            console.log("new message", newMessage)
            // If the message is from the selected user, add it to the messages list
            if (selectedUser?._id === newMessage.senderId) {
                set({
                    messages: [...get().messages, newMessage],
                });
            }
        });
    },

    clearUnreadMessages: (userId) => {
        const { unreadMessages } = get();
        set({
            unreadMessages: {
                ...unreadMessages,
                [userId]: false, // Mark this user as read
            },
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },

    setSelectedUser: (selectedUser) => {
        // Clear unread messages for the selected user when selected
        get().clearUnreadMessages(selectedUser._id);
        set({ selectedUser });
    },
    closeChat: (selectedUser) => set({ selectedUser }),
}));
