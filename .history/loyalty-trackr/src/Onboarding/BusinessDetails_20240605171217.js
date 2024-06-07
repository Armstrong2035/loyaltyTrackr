import React, { useState } from "react";
import {
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const industryList = [
  "Retail",
  "Food and Beverage",
  "Health and Wellness",
  "Automotive",
  "Home Services",
  "Education and Training",
  "Entertainment and Recreation",
  " E-commerce and Online Retail",
];

export const BusinessDetails = () => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleIndustryChange = (e) => {
    const industry = e.target.value;
    setIndustry(industry);
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
          id="demo-simple-select"
          value={industry}
          label="Industry"
          onChange={handleIndustryChange}
        >
          {industryList.map((industry) => {
            return;
            <MenuItem value={industry}>{`${industry}`}</MenuItem>;
          })}
        </Select>
      </FormGroup>
    </div>
  );
};
