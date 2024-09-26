import { create } from "zustand";

const getSessionFromStorage = () => {
  const session = JSON.parse(localStorage.getItem("session")) || { user: null, token: null };
  return session;
};

export const useSessionStore = create((set) => ({
  user: getSessionFromStorage().user,
  token: getSessionFromStorage().token,
  isAuthenticated: !!(getSessionFromStorage.token && getSessionFromStorage.user),
  setUserSession: async (user, token) => {
    localStorage.setItem("session", JSON.stringify({ user, token }));
    set({ user, token, isAuthenticated: true });
  },
  clearUserSession: () => {
    localStorage.removeItem("session");
    set({ user: null, token: null, isAuthenticated: false });
  },
}));
