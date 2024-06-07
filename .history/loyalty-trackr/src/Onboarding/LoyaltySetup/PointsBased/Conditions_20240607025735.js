import { FormGroup, TextField } from "@mui/material";
import React from "react";

export const Conditions = () => {
  const [expirationPeriod, setExpirationPeriod] = useState();
  const [maximumPointsPerPurchase, setMaximumPointsPerPurchase] = useState();

  const increaseMaximumPoints = () => {
    setMaximumPointsPerPurchase(() => (pointsNeeded += 100));
  };

  const decreaseMaximumPoints = () => {
    setMaximumPointsPerPurchase(() => (pointsNeeded -= 100));
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
