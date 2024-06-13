import { create } from "zustand";

import { db } from "../../Firebase/firebase";

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

console.log("User:", user);
console.log("Business Details:", businessDetails);
console.log("Points Per Purchase:", pointsPerPurchase);
console.log("Redemption Options:", redemptionOptions);
console.log("Conditions:", conditions);
