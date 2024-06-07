import { TextField } from "@mui/material";
import React, { useState } from "react";

const PointsPerPurchase = () => {
  const [points, setPoints] = useState(null);
  const [price, setPrice] = useState(null);

  const currencies = [];

  const handlePointsChange = (e) => {
    setPoints(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <div>
        <Typography>
          Your customers receive 10,000 points if they spend
        </Typography>
        <TextField
          id="price"
          label="Price per 10,000 Points"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></TextField>
      </div>
    </>
  );
};
