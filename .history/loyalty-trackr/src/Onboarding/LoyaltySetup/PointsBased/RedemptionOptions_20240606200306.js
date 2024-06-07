import { FormGroup } from "@mui/material";
import React, { useState } from "react";

/* Create array
    Add new object to array
        Object should have the following: 
            Points needed
            Gift to redeem 
*/

export const RedemptionOption = () => {
  const [redemptionOptions, setRedemptionOptions] = useState([]);

  const [pointsNeeded, setPointsNeeded] = useState(10000);
  const [reward, setReward] = useState("");

  const increaseRequirePoints = () => {
    setPointsNeeded((pointsNeeded += 100));
  };

  const decreaseRequiredPoints = () => {
    setPointsNeeded((pointsNeeded -= 100));
  };

  const handleRewardChange = (e) => {
    setReward(e.target.value);
  };

  return (
    <div>
      <FormGroup></FormGroup>
    </div>
  );
};
