import { firebaseApp } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

let userId = "";
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    userId = uid;
  } else {
  }
});

const {
  user,
  businessDetails,
  pointsPerPurchase,
  redemptionOptions,
  conditions,
} = onBoardingStore.getState();

export const addUser = async () => {
  try {
    const newUserPath = doc(db, "users", userId);
    await addDoc(newUserPath, user);
  } catch (error) {
    console.log("Error adding user:", error);
  }
};

export const updateBusinessDetails = async () => {
  try {
    const path = doc(
      db,
      "users",
      userId,
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
