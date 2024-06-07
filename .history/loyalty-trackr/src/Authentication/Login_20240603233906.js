import React, { useState } from "react";
import { firebaseApp } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Typography } from "@mui/material";

export default function Login() {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Typography>Log into LoyaltyTrackr</Typography>
      <FormGroup>
        <TextField
          id="Email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          type="password" // Hide password characters
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
      </FormGroup>
    </>
  );
}
