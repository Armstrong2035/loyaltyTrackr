import { Button, FormGroup, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { onBoardingStore } from "../../Store/Store";

export const RedemptionOption = () => {
  let [pointsNeeded, setPointsNeeded] = useState(10000);
  const [reward, setReward] = useState("");

  const setRedemptionOptions = onBoardingStore(
    (state) => state.setRedemptionOptions
  );

  // const redemptionOptions = onBoardingStore((state) => state.redemptionOptions);

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

    setRedemptionOptions(redemptionOptionInstance);
  };

  // useEffect(() => {
  //   console.log(redemptionOptions);
  // }, [redemptionOptions]);

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
    </div>
  );
};
