import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import { db, auth, userId } from "../../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { onBoardingStore } from "../Store/Store";
import { Link } from "react-router-dom";

const industryList = [
  "Retail",
  "Food and Beverage",
  "Health and Wellness",
  "Automotive",
  "Home Services",
  "Education and Training",
  "Entertainment and Recreation",
  "E-commerce and Online Retail",
];

export const BusinessDetails = () => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [businessDetails, setBusinessDetails] = useState();

  // const setBusinessDetails = onBoardingStore(
  //   (state) => state.setBusinessDetails
  // );
  // const businessDetails = onBoardingStore((state) => state.businessDetails);

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleIndustryChange = (e) => {
    const industry = e.target.value;
    setIndustry(industry);
  };

  useEffect(() => {
    const sendToStore = () => {
      const details = {
        businessName: name,
        businessCategory: industry,
      };
      setBusinessDetails(details);
    };
  }, [name, industry]);

  const updateBusinessDetails = async () => {
    try {
      const path = doc(db, "users", userId, "businessDetails", "Business 1");

      await sendToStore();

      await setDoc(path, businessDetails, { merge: true });
    } catch (error) {
      console.log("Error updating business details:", error);
    }
  };

  return (
    <div>
      <Container sx={{ marginTop: "20px" }}>
        <Stack spacing={5}>
          <Box>
            <Typography variant="h4">Account Information</Typography>
            <Typography variant="h6">
              Let's start by registering your account
            </Typography>
          </Box>

          <Typography>Step 2/3</Typography>

          <Stack spacing={3}>
            <InputLabel id="Business Name">Business Name</InputLabel>
            <TextField
              id="business-name"
              label="Business Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />

            <InputLabel id="industry">Industry</InputLabel>
            <Select
              id="select-industry"
              value={industry}
              label="Industry"
              onChange={handleIndustryChange}
            >
              {industryList.map((industry, i) => (
                <MenuItem
                  key={industry}
                  value={industry}
                >{`${industry}`}</MenuItem>
              ))}
            </Select>

            <Button variant={"contained"} onClick={updateBusinessDetails}>
              Next
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
