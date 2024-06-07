import { FormGroup } from "@mui/material";
import React from "react";

export const Conditions = () => {
  const [expirationPeriod, setExpirationPeriod] = useState();
  const [maximumPointsPerPurchase, setMaximumPointsPerPurchase] = useState();

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
      </FormGroup>
    </div>
  );
};
