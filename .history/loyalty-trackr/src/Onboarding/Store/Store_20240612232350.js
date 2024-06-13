import { create } from "zustand";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";

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

const { user } = onBoardingStore.getState();
const { businessDetails } = onBoardingStore.getState();
const { pointsPerPurchase } = onBoardingStore.getState();
const { redemptionOptions } = onBoardingStore.getState();

const newUserpath = doc(firestore, "users", `${user.id}`);
const addNewUser = () => {};
