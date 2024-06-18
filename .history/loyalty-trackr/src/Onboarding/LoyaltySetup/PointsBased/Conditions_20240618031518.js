import {
  FormGroup,
  TextField,
  Button,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { onBoardingStore } from "../../Store/Store";

export const Conditions = () => {
  const [expirationPeriod, setExpirationPeriod] = useState();
  let [maximumPointsPerPurchase, setMaximumPointsPerPurchase] = useState(10000);

  const setConditions = onBoardingStore((state) => state.setConditions);
  const conditions = onBoardingStore((state) => state.conditions);

  const increaseMaximumPoints = () => {
    setMaximumPointsPerPurchase(() => (maximumPointsPerPurchase += 100));
  };

  const decreaseMaximumPoints = () => {
    setMaximumPointsPerPurchase(() => (maximumPointsPerPurchase -= 100));
  };

  const handleConditionsChange = () => {
    const conditions = {
      pointsExpiry: expirationPeriod,
      maximumPointsObtainable: maximumPointsPerPurchase,
    };

    setConditions(conditions);
  };

  // useEffect(() => {
  //   console.log(conditions);
  // }, [conditions]);

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={5}>
          <Box>
            <Typography variant="h4">Points Based Loyalty Setup</Typography>
          </Box>

          <Typography>Step 2/5</Typography>

          <Stack spacing={3}>
            <TextField
              id="expiration-period"
              label="Expiration Period (days)"
              type="number"
              value={expirationPeriod}
              onChange={(e) => setExpirationPeriod(e.target.value)}
            />

            <h4>{`A customer can get a maximum ${maximumPointsPerPurchase} points on each purchase `}</h4>

            <Button variant="outlined" onClick={increaseMaximumPoints}>
              +
            </Button>
            <Button variant="outlined" onClick={decreaseMaximumPoints}>
              -
            </Button>

            <Button variant="outlined" onClick={handleConditionsChange}>
              Add Conditions
            </Button>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};
