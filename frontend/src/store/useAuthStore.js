import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'
import toast from 'react-hot-toast';


export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });

        } catch (error) {
            console.log(error, "error in check auth")
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data)
            toast.success("Account created successfully")
            set({ authUser: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Logged in successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isLoggingIn: false })
        }
    },

    logout: async () => {
        try {
            axiosInstance.post("/auth/logout");
            set({ authUser: null })
            toast.success("Logout successfully");
        } catch (error) {
            toast.error(error.response.data.message);

        }
    },

    // updateProfile: async (data) => {
    //     set({ isUpdatingProfile: true });

    //     try {
    //         const res = await axiosInstance.put("/auth/update-profile", data);
    //         set({ authUser: res.data });
    //         toast.success("Profile updated successfully");
    //     } catch (error) {
    //         console.log("error in update profile: ", error);
    //         toast.error(error.response.data.message);

    //     } finally {
    //         set({ isUpdatingProfile: false });
    //     }
    // }
    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            console.log("Update profile response:", res); // Debugging line
            set({ authUser: res.data });
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("error in update profile:", error);
            toast.error(error?.response?.data?.message || "Profile update failed");
        } finally {
            set({ isUpdatingProfile: false });
        }
    },

}));    