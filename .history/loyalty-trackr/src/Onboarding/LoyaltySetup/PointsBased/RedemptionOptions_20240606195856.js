import React, { useState } from "react";

/* Create array
    Add new object to array
        Object should have the following: 
            Points needed
            Gift to redeem 
*/

export const RedemptionOption = () => {
  const [redemptionOptions, setRedemptionOptions] = useState([]);

  const [pointsNeeded, setPointsNeeded] = useState(null);
  const [reward, setReward] = useState("");

  const handlePointsChange = (e) => {
    setPointsNeeded(e.target.value);
  };

  const handleRewardChange = (e) => {
    setReward(e.target.value);
  };
};
