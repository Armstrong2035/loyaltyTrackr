import {
  Button,
  FormGroup,
  Stack,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { onBoardingStore } from "../../Store/Store";

export const RedemptionOption = () => {
  let [pointsNeeded, setPointsNeeded] = useState(1);
  const [reward, setReward] = useState("");

  const setRedemptionOptions = onBoardingStore(
    (state) => state.setRedemptionOptions
  );

  // const redemptionOptions = onBoardingStore((state) => state.redemptionOptions);

  // const increaseRequirePoints = () => {
  //   setPointsNeeded(() => (pointsNeeded += 1));
  // };

  // const decreaseRequiredPoints = () => {
  //   setPointsNeeded(() => (pointsNeeded -= 1));
  // };

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

          <Typography>Step 2/5</Typography>

          <h4>How many points does the customer need to redeem a reward?</h4>
          <TextField
            id="price"
            label="Points to redeem"
            variant="outlined"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />

          <h4>What is the reward? :</h4>
          <TextField id="reward" value={reward} onChange={handleRewardChange} />

          <Button variant="outlined" onClick={addRedemptionOption}>
            Add reward
          </Button>
        </Stack>
      </div>
    </div>
  );
};
