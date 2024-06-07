import { Button, FormGroup, Stack, TextField } from "@mui/material";
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

  const addRedemptionOption = () => {
    const redemptionOptionInstance = {
      points: pointsNeeded,
      reward: reward,
    };
  };

  setRedemptionOptions((prev) => [...prev, redemptionOptionInstance]);

  return (
    <div>
      <Stack>
        <h4>{`Customer needs ${pointsNeeded}`}</h4>
        <Button variant="outlined" onClick={increaseRequirePoints}>
          +
        </Button>
        <Button variant="outlined" onClick={decreaseRequiredPoints}>
          -
        </Button>

        <h4>To receive this reward:</h4>
        <TextField id="reward" value={reward} onChange={handleRewardChange} />

        <Button variant="outlined" onClick={addRedemptionOption}>
          Add reward
        </Button>
      </Stack>
    </div>
  );
};