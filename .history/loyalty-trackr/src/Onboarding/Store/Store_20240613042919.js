import { create } from "zustand";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
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

const {
  user,
  businessDetails,
  pointsPerPurchase,
  redemptionOptions,
  conditions,
} = onBoardingStore.getState();

export const addUser = async () => {
  try {
    const newUserPath = doc(db, "users", `${user.id}`);
    await setDoc(newUserPath, user, { merge: true });
  } catch (error) {
    console.log("Error adding user:", error);
  }
};

export const updateBusinessDetails = async () => {
  try {
    const path = doc(
      db,
      "users",
      `${user.id}`,
      "businessDetails",
      `${businessDetails.name}`
    );

    await setDoc(path, businessDetails, { merge: true });
  } catch (error) {
    console.log("Error updating business details:", error);
  }
};

export const addLoyaltyPlan = async () => {
  try {
    const path = collection(db, "users", `${user.id}`, "loyaltyPlans");

    const newLoyaltyPlan = {
      active: true,
      ppp: pointsPerPurchase,
      redemption: redemptionOptions,
      conditions: conditions,
    };
    await addDoc(path, newLoyaltyPlan);

    console.log("Loyalty plan added successfully.");
  } catch (error) {
    console.log("Error adding loyalty plan:", error);
  }
};

console.log("User:", user);
console.log("Business Details:", businessDetails);
console.log("Points Per Purchase:", pointsPerPurchase);
console.log("Redemption Options:", redemptionOptions);
console.log("Conditions:", conditions);
