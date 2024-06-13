import { create } from "zustand";
import { doc, firestore, setDoc, addDoc } from "firebase/firestore";
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

/// send data to firebase

const { user } = onBoardingStore.getState();
const { businessDetails } = onBoardingStore.getState();
const { pointsPerPurchase } = onBoardingStore.getState();
const { redemptionOptions } = onBoardingStore.getState();
const { conditions } = onBoardingStore.getState();
export const addUser = async () => {
  try {
    const newUserpath = doc(db, "users");
    await addDoc(newUserpath, user);
  } catch (error) {
    console.log(error);
  }
};

export const updateBusinessDetails = async () => {
  try {
    const path = doc(
      db,
      "users",
      `${user.id}`,
      "Business Details",
      `${businessDetails.name}`
    );

    await setDoc(path, businessDetails);
  } catch (error) {
    console.log(error);
  }
};

export const addLoyaltyPlan = async () => {
  try {
    const path = doc(db, "users", `${user.id}`, "loyaltyPlans");

    const newLoyaltyPlan = {
      active: true,
      ppp: pointsPerPurchase,
      redemption: redemptionOptions,
      conditions: conditions,
    };
    await addDoc(path, newLoyaltyPlan);
  } catch (error) {
    console.log(error);
  }
};

console.log(user);
console.log(businessDetails);
console.log(pointsPerPurchase);
console.log(redemptionOptions);
console.log(conditions);
