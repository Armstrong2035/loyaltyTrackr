import { TextField } from "@mui/material";
import React, { useState } from "react";

const PointsPerPurchase = () => {
  const [points, setPoints] = useState(null);
  const [price, setPrice] = useState(null);

  const handlePointsChange = (e) => {
    setPoints(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <FormGroup>
        <Stack id="points-per-purchase">
          <Typography>Your customer gets</Typography>
          <TextField id="points" value={ppp.points} label />
        </Stack>
      </FormGroup>
    </>
  );
};
