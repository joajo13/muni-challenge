import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const getSessionFromStorage = () => {
  const session = JSON.parse(localStorage.getItem("session")) || {
    user: null,
    token: null,
  };
  const { user, token } = session;

  if (token) {
    const decodedToken = jwtDecode(token);
    const isTokenExpired = decodedToken.exp < Date.now() / 1000;

    if (isTokenExpired) {
      localStorage.removeItem("session");
      return { user: null, token: null };
    }
  }

  return { user, token };
};

export const useSessionStore = create((set) => {
  const storageSession = getSessionFromStorage();

  return {
    user: storageSession.user,
    token: storageSession.token,
    isAuthenticated: storageSession.token ? true : false,
    setUserSession: async (user, token) => {
      localStorage.setItem("session", JSON.stringify({ user, token }));
      set({ user, token, isAuthenticated: true });
    },
    clearUserSession: () => {
      localStorage.removeItem("session");
      set({ user: null, token: null, isAuthenticated: false });
    },
    refetch: false,
    setRefetch: (refetch) => set({ refetch }),
  };
});
