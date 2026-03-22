import { create } from "zustand";

interface LoaderState {
  loader: Record<string, boolean>;

  isLoading: (key: string) => boolean;
  start: (key: string) => void;
  stop: (key: string) => void;
}

export const useLoaderStore = create<LoaderState>((set, get) => ({
  loader: {},

  isLoading: (key: string) => {
    return !!get().loader[key];
  },

  start: (key: string) => {
    set((state) => ({
      loader: {
        ...state.loader,
        [key]: true,
      },
    }));
  },

  stop: (key: string) => {
    set((state) => ({
      loader: {
        ...state.loader,
        [key]: false,
      },
    }));
  },
}));
