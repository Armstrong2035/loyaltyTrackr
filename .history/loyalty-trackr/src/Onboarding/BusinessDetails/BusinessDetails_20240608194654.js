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
  const [businessDetails, setBusinessDetails] = useState({});

  const updateBusinessDetails = useOnBoardingStore(
    (state) => state.updateBusinessDetails
  );

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleIndustryChange = (e) => {
    const industry = e.target.value;
    setIndustry(industry);
  };

  const handleBusinessDetailChange = () => {
    const details = {
      businessName: name,
      businessCategory: industry,
    };
    setBusinessDetails(details);
  };

  updateBusinessDetails(businessDetails);

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
          {industryList.map((industry) => (
            <MenuItem value={industry}>{`${industry}`}</MenuItem>
          ))}
        </Select>
      </FormGroup>

      <Button>Next</Button>
    </div>
  );
};
