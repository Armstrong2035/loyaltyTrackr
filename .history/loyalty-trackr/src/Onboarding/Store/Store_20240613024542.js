import { create } from "zustand";
import { doc, firestore, setDoc } from "firebase/firestore";
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

const addUser = async () => {
  try {
    const { user } = onBoardingStore.getState();

    const newUserpath = doc(db, "users", `${user.id}`);
    await setDoc(newUserpath, user, { merge: true });
  } catch (error) {
    console.log(error);
  }
};

const updateBusinessDetails = async () => {
  try {
    const { businessDetails } = onBoardingStore.getState();
    const path = doc(db, "users", `${user.id}`, "Business Details");

    await setDoc(path, businessDetails, { merge: true });
  } catch (error) {
    console.log(error);
  }
};

const addLoyaltyPlan = async () => {
  try {
    const { pointsPerPurchase } = onBoardingStore.getState();
    const { redemptionOptions } = onBoardingStore.getState();
    const { conditions } = onBoardingStore.getState();

    const path = doc(db, "users", `${user.id}`, "loyaltyPlans");

    const newLoyaltyPlan = {
      active: true,
      ppp: pointsPerPurchase,
      redemption: redemptionOptions,
      conditions: conditions,
    };
    await setDoc(path, newLoyaltyPlan, { merge: true });
  } catch (error) {
    console.log(error);
  }
};
