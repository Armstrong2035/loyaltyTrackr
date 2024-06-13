import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { PointsPerPurchase } from "../PointsBased/PointsPerPurchase";
import { RedemptionOption } from "./RedemptionOptions";
import { Conditions } from "./Conditions";
import { onBoardingStore } from "../../Store/Store";
import { addLoyaltyPlan } from "../../../Firebase/Onboarding";

export const PointsBased = () => {
  const { pointsPerPurchase, redemptionOptions, conditions } =
    onBoardingStore.getState();

  useEffect(() => {
    addLoyaltyPlan();
  });

  return (
    <>
      <h2>Points-Based Loyalty Program Setup</h2>

      <p>
        Example: If you set the price per 10,000 points to $100, a customer who
        spends $100 at your store will earn 10,000 points. You can then define
        what rewards customers can get with these points.
      </p>

      <p>
        10,000 points is the default. You can edit it later in your dashboard.
      </p>

      <h3>How can your customers earn points</h3>
      <PointsPerPurchase />

      <h3>How will your customers redeem their points</h3>
      <RedemptionOption />

      <h3>What are the terms and conditions?</h3>
      <Conditions />
    </>
  );
};
