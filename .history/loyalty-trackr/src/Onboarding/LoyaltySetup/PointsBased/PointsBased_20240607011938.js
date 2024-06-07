import { Typography } from "@mui/material";
import React from "react";
import { PointsPerPurchase } from "../PointsBased/PointsPerPurchase";
import { RedemptionOption } from "./RedemptionOptions";

export const PointsBased = () => {
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

      <PointsPerPurchase />
      {/* <RedemptionOption /> */}
    </>
  );
};
