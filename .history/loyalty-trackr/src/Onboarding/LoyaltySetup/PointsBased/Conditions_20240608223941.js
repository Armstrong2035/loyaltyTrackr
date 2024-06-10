import { FormGroup, TextField, Button } from "@mui/material";
import React, { useState } from "react";
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

  console.log(conditions);

  return (
    <div>
      <FormGroup>
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
      </FormGroup>
    </div>
  );
};
