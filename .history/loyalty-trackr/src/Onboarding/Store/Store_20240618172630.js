import { create } from "zustand";

import { db } from "../../Firebase/firebase";

export const onBoardingStore = create((set) => ({
  user: {},
  setUser: (newUser) => set({ user: newUser }),
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
