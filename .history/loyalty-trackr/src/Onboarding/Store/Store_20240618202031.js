import { create } from "zustand";

export const onBoardingStore = create((set) => ({
  user: {},
  storeUser: (newUser) => set({ user: newUser }),
  businessDetails: {},
  storeBusinessDetails: (details) => set({ businessDetails: details }),

  pointsPerPurchase: {},
  storePointsPerPurchase: (points) => set({ pointsPerPurchase: points }),

  redemptionOptions: [],
  storeRedemptionOptions: (newOption) =>
    set((state) => ({
      redemptionOptions: [...state.redemptionOptions, newOption],
    })),

  conditions: {},
  storeConditions: (newConditions) => set({ conditions: newConditions }),
}));
