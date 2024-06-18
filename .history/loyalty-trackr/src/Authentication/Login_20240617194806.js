import React, { useState } from "react";
import { firebaseApp } from "../Firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Typography, FormGroup, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Login() {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .then(() => navigate("/onboarding"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <>
      <Container sx={{ marginTop: "20px" }}>
        <Stack spacing={5}>
          <Box>
            <Typography variant="h4">Account Information</Typography>
            <Typography variant="h6">
              Let's start by registering your account
            </Typography>
          </Box>

          <Typography>Step 1/5</Typography>

          <Stack spacing={2}>
            

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
}
