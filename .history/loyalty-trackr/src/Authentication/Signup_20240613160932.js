import React, { useState, useEffect } from "react";
import { firebaseApp, db } from "../Firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { addUser } from "../Onboarding/Store/Store";

import { FormGroup, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { onBoardingStore } from "../Onboarding/Store/Store";

export const Signup = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const setUser = onBoardingStore((state) => state.setUser);

  // console.log(email, password);

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = {
          email: userCredential.user.email,
          id: userCredential.user.id,
        };

        setUser(user);
        addUser();
      })

      .then(() => navigate("/onboarding"))
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Typography>Join LoyaltyTrackr</Typography>
      <FormGroup>
        <TextField
          id="Email"
          label="Email"
          variant="outlined"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
      </FormGroup>
    </>
  );
};
