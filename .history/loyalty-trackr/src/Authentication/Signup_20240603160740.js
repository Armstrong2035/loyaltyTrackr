import React, { useState, useEffect } from "react";
import { firebaseApp } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { FormGroup, TextField, Button } from "@mui/material";

export const Signup = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <FormGroup onSubmit={handleSubmit}>
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

        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </FormGroup>
    </>
  );
};
