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

  const storeConditions = onBoardingStore((state) => state.storeConditions);

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

    storeConditions(conditions);
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

            <h4>Points expire after:</h4>

            <TextField
              id="price"
              label="Maximum Points Per Purchase"
              variant="outlined"
              value={maximumPointsPerPurchase}
              type="number"
              onChange={(e) => setMaximumPointsPerPurchase(e.target.value)}
            />

            <Button variant="outlined" onClick={handleConditionsChange}>
              Next
            </Button>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};
