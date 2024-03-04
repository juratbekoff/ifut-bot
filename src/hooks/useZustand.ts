import { create } from "zustand";

interface UserStore {
  userTgId: number | null;
  setUserTgId: (userTgId: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userTgId: null,
  setUserTgId: (userTgId) => set({ userTgId }),
}));
