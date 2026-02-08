import { create } from "zustand";
import {
  loginRequest,
  logoutRequest,
  checkAuthRequest,
} from "../services/auth.service";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (credentials) => {
    await loginRequest(credentials);
    const res = await checkAuthRequest();
    set({
      user: res.data.user,
      isAuthenticated: true,
    });
  },

  checkAuth: async () => {
    try {
      const res = await checkAuthRequest();
      set({
        user: res.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (err) {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false, // 🔥 THIS FIXES LOADING STUCK
      });
    }
  },

  logout: async () => {
    await logoutRequest();
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));

export default useAuthStore;
