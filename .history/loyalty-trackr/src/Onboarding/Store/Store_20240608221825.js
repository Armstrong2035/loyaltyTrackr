import { create } from "zustand";
import { PointsPerPurchase } from "../LoyaltySetup/PointsBased/PointsPerPurchase";

export const onBoardingStore = create((set) => ({
  businessDetails: {},
  setBusinessDetails: (state) => set({ businessDetails: state }),
  pointsPerPurchase: {},
  setPointsPerPurchase: (state) => set({ pointsPerPurchase: state }),
  redemptionOptions: {},
  setRedemptionOptions: (newOption) =>
    set({ redemptionOptions: [...redemptionOptions, newOption] }),
}));
