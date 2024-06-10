import { Button, FormGroup, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { onBoardingStore } from "../../Store/Store";

/* Create array
    Add new object to array
        Object should have the following: 
            Points needed
            Gift to redeem 
*/

export const RedemptionOption = () => {
  const setRedemptionOptions = onBoardingStore(
    (state) => state.redemptionOptions
  );

  const redemptionOptions = onBoardingStore((state) => state.redemptionOptions);

  let [pointsNeeded, setPointsNeeded] = useState(10000);
  const [reward, setReward] = useState("");

  const increaseRequirePoints = () => {
    setPointsNeeded(() => (pointsNeeded += 100));
  };

  const decreaseRequiredPoints = () => {
    setPointsNeeded(() => (pointsNeeded -= 100));
  };

  const handleRewardChange = (e) => {
    setReward(e.target.value);
  };

  const addRedemptionOption = () => {
    const redemptionOptionInstance = {
      points: pointsNeeded,
      reward: reward,
    };

    setRedemptionOptions((prev) => [...prev, redemptionOptionInstance]);
  };

  console.log(redemptionOptions);

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
