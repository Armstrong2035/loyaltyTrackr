import React from "react";
import { firebaseApp } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <></>;
}
