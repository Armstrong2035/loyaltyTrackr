import React, { useState } from "react";
import {
  Button,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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

  const setBusinessDetails = onBoardingStore(
    (state) => state.setBusinessDetails
  );

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

  return (
    <div>
      <FormGroup>
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
            <MenuItem value={industry}>{`${industry}`}</MenuItem>
          ))}
        </Select>

        <Button onClick={sendToStore}>Submit</Button>
      </FormGroup>
    </div>
  );
};
