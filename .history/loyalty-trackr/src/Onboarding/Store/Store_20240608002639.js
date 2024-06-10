import { create } from "zustand";

const onBoardingStore = create((set) => ({
  businessDetails: {},
  updateBusinessDetails: () =>
    set((state) => ({ businessDetails: state.businessDetails })),
}));
