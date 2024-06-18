import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { db, auth, userId } from "../../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { onBoardingStore } from "../Store/Store";

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

  const sendToStore = () => {
    const details = {
      businessName: name,
      businessCategory: industry,
    };
    setBusinessDetails(details);
  };

  useEffect(() => {
    const updateBusinessDetails = async () => {
      try {
        const path = doc(db, "users", userId, "businessDetails", "Business 1");

        await setDoc(path, businessDetails, { merge: true });
      } catch (error) {
        console.log("Error updating business details:", error);
      }
    };

    updateBusinessDetails();
  }, [businessDetails]);

  return (
    <div>
      <Container>
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
            <MenuItem key={industry} value={industry}>{`${industry}`}</MenuItem>
          ))}
        </Select>

        <Button onClick={sendToStore}>Submit</Button>
      </Container>
    </div>
  );
};