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
import { Link } from "react-router-dom";

export const RedemptionOption = () => {
  let [pointsNeeded, setPointsNeeded] = useState(1);
  const [reward, setReward] = useState("");

  const storeRedemptionOptions = onBoardingStore(
    (state) => state.storeRedemptionOptions
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

    storeRedemptionOptions(redemptionOptionInstance);
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
            value={pointsNeeded}
            type="number"
            onChange={(e) => setPointsNeeded(e.target.value)}
          />

          <h4>What is the reward? </h4>
          <TextField id="reward" value={reward} onChange={handleRewardChange} />

          <Link to="/onboarding/loyalty-setup/loyalty-pathways/conditions">
            <Button
              variant="contained"
              color="primary"
              onClick={addRedemptionOption}
            >
              Next
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};
