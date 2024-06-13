// onboarding.js
import { getUserId } from "./firebase";
import { onBoardingStore } from "../Onboarding/Store/Store";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

// Function to add user data
export const addUser = async () => {
  const userId = getUserId();
  if (!userId) {
    console.log("User ID is not available");
    return;
  }

  const user = onBoardingStore.getState().user;

  try {
    const newUserPath = doc(db, "users", userId);
    await setDoc(newUserPath, user);
  } catch (error) {
    console.log("Error adding user:", error);
  }
};

// Function to update business details
export const updateBusinessDetails = async () => {
  const userId = getUserId();
  if (!userId) {
    console.log("User ID is not available");
    return;
  }

  const businessDetails = onBoardingStore.getState().businessDetails;

  try {
    const path = doc(
      db,
      "users",
      userId,
      "businessDetails",
      businessDetails.name
    );
    await setDoc(path, businessDetails, { merge: true });
  } catch (error) {
    console.log("Error updating business details:", error);
  }
};

// Function to add a loyalty plan
export const addLoyaltyPlan = async () => {
  const userId = getUserId();
  if (!userId) {
    console.log("User ID is not available");
    return;
  }

  const pointsPerPurchase = onBoardingStore.getState().pointsPerPurchase;
  const redemptionOptions = onBoardingStore.getState().redemptionOptions;
  const conditions = onBoardingStore.getState().conditions;

  try {
    const path = collection(db, "users", userId, "loyaltyPlans");
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
