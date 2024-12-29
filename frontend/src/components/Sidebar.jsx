import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import { fromatMeassageTimer } from "../lib/utils";

const Sidebar = () => {
    const {
        getUsers,
        users,
        selectedUser,
        setSelectedUser,
        isUsersLoading,
        unreadMessages,
    } = useChatStore();

    const { onlineUsers } = useAuthStore();
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);
    console.log("typeunreadis", unreadMessages.length)
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const filteredUsers = showOnlineOnly
        ? users.filter((user) => onlineUsers.includes(user._id))
        : users;

    if (isUsersLoading) return <SidebarSkeleton />;

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
            <div className="border-b border-base-300 w-full p-5">
                <div className="flex items-center gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>

                <div className="mt-3 hidden lg:flex flex-col justify-start items-center gap-2">
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showOnlineOnly}
                            onChange={(e) => setShowOnlineOnly(e.target.checked)}
                            className="checkbox checkbox-sm"
                        />
                        <span className="text-sm">Show online only</span>
                    </label>
                    <span className="text-xs text-zinc-500">
                        ({onlineUsers.length - 1} online)
                    </span>

                </div>
                <div className="hidden lg:block">
                    {unreadMessages.length > 0 &&
                        (
                            <div className="text-xs ">
                                You have {unreadMessages.length} {unreadMessages.length > 1 ? "unread messages" : "unread message"}
                            </div>

                        )

                    }
                </div>

            </div>

            <div className="overflow-y-auto w-full py-3">
                {filteredUsers.map((user) => (
                    <button
                        key={user._id}
                        onClick={() => setSelectedUser(user)}
                        className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transform-colors ${selectedUser?._id === user._id
                            ? "bg-base-300 ring-1 ring-base-300"
                            : ""
                            }`}
                    >
                        <div className="relative mx-auto lg:mx-0">
                            <img
                                src={user.profilePic || "/avatar.png"}
                                alt={user.name}
                                className="size-12 object-cover rounded-full "
                            />
                            {onlineUsers.includes(user._id) && (
                                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
                            )}

                        </div>

                        {/* User info - only visible on larger screens */}
                        <div className="hidden  lg:flex items-center justify-between text-left w-full">
                            <div>
                                <div className="font-medium truncate">
                                    {user.fullName}
                                </div>
                                <div className="text-sm text-zinc-400">
                                    {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                                {unreadMessages.some((msg) => msg.senderId === user._id) && (
                                    <span className=" bg-green-500 text-white text-xs  font-bold rounded-full px-1 py-[0.5]">
                                        {unreadMessages.filter((msg) => msg.senderId === user._id).length}
                                    </span>
                                )}
                                {unreadMessages.some((msg) => msg.senderId === user._id) && (
                                    <span className="  text-white text-[9px] font-bold rounded-full px-2 py-1">
                                        {fromatMeassageTimer(unreadMessages[unreadMessages.length - 1].createdAt)}

                                    </span>
                                )}
                            </div>
                        </div>
                    </button>
                ))}

                {filteredUsers.length === 0 && (
                    <div className="text-center text-zinc-500 mt-5">
                        No online users found
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
