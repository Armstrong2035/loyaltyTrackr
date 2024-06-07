import { FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import currencies from "../../../Utility/currencies";

const PointsPerPurchase = () => {
  const [points, setPoints] = useState(null);
  const [price, setPrice] = useState(null);

  const handlePointsChange = (e) => {
    setPoints(e.target.value);
  };

  return (
    <>
      <div>
        <Typography>
          Your customers receive 10,000 points if they spend
        </Typography>

        <FormGroup>
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
