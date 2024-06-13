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
