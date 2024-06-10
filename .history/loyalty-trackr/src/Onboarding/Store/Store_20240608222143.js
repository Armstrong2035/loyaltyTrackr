import { create } from "zustand";

export const onBoardingStore = create((set) => ({
  businessDetails: {},
  setBusinessDetails: (state) => set({ businessDetails: state }),
  pointsPerPurchase: {},
  setPointsPerPurchase: (state) => set({ pointsPerPurchase: state }),
  redemptionOptions: [],
  setRedemptionOptions: (newOption) =>
    set({ redemptionOptions: [...redemptionOptions, newOption] }),
}));
