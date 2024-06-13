import { create } from "zustand";

export const onBoardingStore = create((set) => ({
  user: {},
  setUser: (newUser) => set({ user: newUser }),
  businessDetails: {},
  setBusinessDetails: (details) => set({ businessDetails: details }),

  pointsPerPurchase: {},
  setPointsPerPurchase: (points) => set({ pointsPerPurchase: points }),

  redemptionOptions: [],
  setRedemptionOptions: (newOption) =>
    set((state) => ({
      redemptionOptions: [...state.redemptionOptions, newOption],
    })),

  conditions: {},
  setConditions: (newConditions) => set({ conditions: newConditions }),
}));
