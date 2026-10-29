// zustand : 여러 컴포넌트가 같이 쓰는 값(전역 상태)을 담는 곳
import { create } from "zustand";

// create : store 만들기
export const useAuthStore = create((set) => ({
    token: localStorage.getItem("token"),
    user: null, // 처음 값 : 로그인 전
    setUser: (user) => set({ user }),
    login: (token, user) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      set({ user, token });
    },
    logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
    },
}));