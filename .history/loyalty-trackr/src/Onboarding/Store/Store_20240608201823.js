import { create } from "zustand";
import { PointsPerPurchase } from "../LoyaltySetup/PointsBased/PointsPerPurchase";

export const onBoardingStore = create((set) => ({
  businessDetails: {},
  setBusinessDetails: (details) => set({ businessDetails: details }),
  pointsPerPurchase: {},
  setPointsPerPurchase: (details) => set({ PointsPerPurchase: details }),
}));
