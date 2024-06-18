import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { PointsPerPurchase } from "../PointsBased/PointsPerPurchase";
import { RedemptionOption } from "./RedemptionOptions";
import { Conditions } from "./Conditions";
import { onBoardingStore } from "../../Store/Store";

import { db, userId } from "../../../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export const PointsBased = () => {
  const { pointsPerPurchase, redemptionOptions, conditions } =
    onBoardingStore.getState();

  console.log(pointsPerPurchase);

  useEffect(() => {
    const addLoyaltyPlan = async () => {
      try {
        const path = doc(db, "users", userId, "loyaltyPlans", "Loyalty Plan 0");

        const newLoyaltyPlan = {
          active: true,
          ppp: pointsPerPurchase,
          redemption: redemptionOptions,
          conditions: conditions,
        };
        await setDoc(path, newLoyaltyPlan, { merge: true });

        console.log("Loyalty plan added successfully.");
      } catch (error) {
        console.log("Error adding loyalty plan:", error);
      }
    };
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
