import React from "react";
import { onBoardingStore } from "../Onboarding/Store/Store";

export const Dashboard = () => {
  const user = onBoardingStore((state) => user.state);
  const businessDetails = onBoardingStore((state) => businessDetails.state);
  const pointsPerPurchase = onBoardingStore((state) => pointsPerPurchase.state);
  const redemptionOptions = onBoardingStore((state) => redemptionOptions.state);
  const conditions = onBoardingStore((state) => conditions.state);

  return (
    <>
      <p>{user.email}</p>
    </>
  );
};
