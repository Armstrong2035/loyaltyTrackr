import React, { useState, useEffect } from "react";
import { firebaseApp, db } from "../Firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import {
  FormGroup,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
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
  const user = onBoardingStore((state) => state.user);

  console.log(data);

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = {
          userName: name,
          userId: userCredential.user.uid,
          email: userCredential.user.email,
        };

        return userData;
      })
      .then((userData) => {
        setData(userData);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}, Message: ${errorMessage}`);
      });
  };

  // useEffect(() => {
  //   console.log(user);
  // }, user);
  useEffect(() => {
    console.log(data);
    if (data) {
      const addUserToFirestore = async () => {
        try {
          const userDocRef = doc(db, "users", `${data.userId}`); // Create a document reference
          await setDoc(userDocRef, data); // Use setDoc to create or overwrite the document
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
      <Container sx={{ marginTop: "20px" }}>
        <Grid container>
          <Grid item>
            <Typography variant="h3">Account Information</Typography>
            <Typography variant="h6">Let's start by registering you</Typography>
          </Grid>

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
        </Grid>
      </Container>
    </>
  );
};
