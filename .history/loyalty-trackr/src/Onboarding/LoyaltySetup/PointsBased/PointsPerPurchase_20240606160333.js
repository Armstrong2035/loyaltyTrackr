import { FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import currencies from "../../../Utility/currencies";

const PointsPerPurchase = () => {
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState(null);

  return (
    <>
      <div>
        <Typography>
          Your customers receive 10,000 points if they spend
        </Typography>

        <FormGroup>
          <Select
            id="select-currency"
            value={currency}
            label="Currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            {industryList.map((industry) => (
              <MenuItem value={industry}>{`${industry}`}</MenuItem>
            ))}
          </Select>
          <TextField
            id="price"
            label="Price per 10,000 Points"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
      </div>
    </>
  );
};
