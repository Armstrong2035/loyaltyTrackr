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
  Box,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { onBoardingStore } from "../Onboarding/Store/Store";

export const Signup = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const storeUser = onBoardingStore((state) => state.storeUser);

  // console.log(data);

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = {
          name: name, // Use the state variable for name
          email: email, // Use the state variable for email
          userId: userCredential.user.uid,
        };

        return userData;
      })
      .then((userData) => {
        setData(userData);
      })

      .then(() => {
        navigate("/onboarding/business-details");
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
    // console.log(data);
    if (data) {
      const addUserToFirestore = async () => {
        try {
          const userDocRef = doc(db, "users", `${data.userId}`);
          await setDoc(userDocRef, data);
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
        <Stack spacing={5}>
          <Box>
            <Typography variant="h4">Account Information</Typography>
            <Typography variant="h6">
              Let's start by registering your account
            </Typography>
          </Box>

          <Typography>Step 2/5</Typography>

          <Stack spacing={2}>
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

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Save and Continue
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
