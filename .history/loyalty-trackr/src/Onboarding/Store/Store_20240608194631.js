import { create } from "zustand";

export const onBoardingStore = create((set) => ({
  businessDetails: {},
  updateBusinessDetails: (details) => set({ businessDetails: details }),
}));
