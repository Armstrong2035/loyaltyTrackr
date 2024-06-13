import React, { useState, useEffect } from "react";
import { firebaseApp, db } from "../Firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, addDoc } from "firebase/firestore";
import { FormGroup, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { onBoardingStore } from "../Onboarding/Store/Store";

export const Signup = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const setUser = onBoardingStore((state) => state.setUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = {
          userName: name,
          userId: userCredential.user.uid,
          email: userCredential.user.email,
        };

        setData(userData);
        setUser(userData);
        navigate("/onboarding");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}, Message: ${errorMessage}`);
      });
  };

  useEffect(() => {
    if (data) {
      const addUserToFirestore = async () => {
        try {
          const userDocRef = doc(
            db,
            "users",
            `${data.userId}`,
            "User Data",
            `${data.userName}`
          );
          await addDoc(userDocRef, data);
          console.log("User added to Firestore");
        } catch (error) {
          console.log("Error adding user to Firestore:", error);
        }
      };

      addUserToFirestore();
    }
  }, [data]);

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
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <TextField
          id="Email"
          label="Email"
          variant="outlined"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
      </FormGroup>
    </>
  );
};