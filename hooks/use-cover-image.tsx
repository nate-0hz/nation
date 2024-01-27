import { create } from "zustand"

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpen: false,
  // url: undefined here prevents accidental deletion of cover image
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen:false, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));