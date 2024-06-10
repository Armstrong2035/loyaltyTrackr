import {
  FormGroup,
  TextField,
  Select,
  Typography,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { currencies } from "../../../Utility/currencies";

export const PointsPerPurchase = () => {
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState(0);

  const currencyArray = currencies;

  const pointsPerPurchase = {
    points: 10000,
    pricePerPurchase: {
      amount: price,
      currency: currency,
    },
  };

  console.log(pointsPerPurchase);

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
            {currencyArray.map((currency) => (
              <MenuItem value={currency}>{`${currency}`}</MenuItem>
            ))}
          </Select>

          <TextField
            id="price"
            label="Price per 10,000 Points"
            variant="outlined"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
      </div>
    </>
  );
};
