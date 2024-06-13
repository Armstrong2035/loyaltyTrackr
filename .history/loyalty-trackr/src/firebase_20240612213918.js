import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7fS3b39W-szX91Z_UlDVhWtSZr5IlNu4",
  authDomain: "loyaltytrackr.firebaseapp.com",
  projectId: "loyaltytrackr",
  storageBucket: "loyaltytrackr.appspot.com",
  messagingSenderId: "819620485040",
  appId: "1:819620485040:web:dd61e1b13db17b6069a875",
  measurementId: "G-E1BJ93BVLZ",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
