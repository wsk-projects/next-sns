import { create } from "zustand";

interface LoadingStore {
  isLoading: boolean;
  startLoading: () => void;
  endLoading: () => void;
}

/**
 * 글로벌 스코프에서 로딩 상태를 관리하는 저장소
 */
export const useLoading = create<LoadingStore>((set) => ({
  isLoading: true,
  startLoading: () => set({ isLoading: true }),
  endLoading: () => set({ isLoading: false }),
}));
