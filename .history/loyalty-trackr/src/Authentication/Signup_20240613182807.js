import React, { useState, useEffect } from "react";
import { firebaseApp, db } from "../Firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { FormGroup, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { onBoardingStore } from "../Onboarding/Store/Store";

export const Signup = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const setUser = onBoardingStore((state) => state.setUser);

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        const userData = {
          name = name, 
          userId: userCredential.user.uid,
          email: userCredential.user.email,
        };

        setData(userData);

        // setUser(user);
      })

      .then(() => navigate("/onboarding"))
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <Typography>Join LoyaltyTrackr</Typography>
      <FormGroup>
        <TextField
          id="Name"
          label="Name"
          variant="outlined"
          value={name}
          type="name"
          onChange={(e) => {e.preventDefaultsetName(e.target.value)}}
        />

        <TextField
          id="Email"
          label="Email"
          variant="outlined"
          value={email}
          type="email"
          onChange={(e) => {e.preventDefaultsetEmail(e.target.value)}}
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
