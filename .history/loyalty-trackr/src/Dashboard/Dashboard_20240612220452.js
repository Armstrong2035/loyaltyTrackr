import React from "react";
import { onBoardingStore } from "../Onboarding/Store/Store";

export const Dashboard = () => {
  const user = onBoardingStore((state) => user.state);

  return (
    <>
      <p>{user.email}</p>
    </>
  );
};
