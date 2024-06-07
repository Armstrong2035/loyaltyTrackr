import { FormGroup, TextField } from "@mui/material";
import React from "react";

export const Conditions = () => {
  const [expirationPeriod, setExpirationPeriod] = useState();
  const [maximumPointsPerPurchase, setMaximumPointsPerPurchase] = useState();

  const increaseMaximumPoints = () => {
    setPointsNeeded(() => (pointsNeeded += 100));
  };

  const decreaseMaximumPoints = () => {
    setPointsNeeded(() => (pointsNeeded -= 100));
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

        <Button variant="outlined" onClick={increaseRequirePoints}>
          +
        </Button>
        <Button variant="outlined" onClick={decreaseRequiredPoints}>
          -
        </Button>
      </FormGroup>
    </div>
  );
};
