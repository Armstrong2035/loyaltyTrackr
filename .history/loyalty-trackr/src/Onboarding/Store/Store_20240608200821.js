import { create } from "zustand";

export const onBoardingStore = create((set) => ({
  businessDetails: {},
  setBusinessDetails: (details) => set({ businessDetails: details }),
}));
