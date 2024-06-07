import { FormGroup, TextField, Button } from "@mui/material";
import React, { useState } from "react";

export const Conditions = () => {
  const [expirationPeriod, setExpirationPeriod] = useState();
  const [maximumPointsPerPurchase, setMaximumPointsPerPurchase] = useState();
  const [conditions, setConditions] = useState();

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

        <h2>{maximumPointsPerPurchase}</h2>

        <Button variant="outlined" onClick={increaseMaximumPoints}>
          +
        </Button>
        <Button variant="outlined" onClick={decreaseMaximumPoints}>
          -
        </Button>
      </FormGroup>
    </div>
  );
};
