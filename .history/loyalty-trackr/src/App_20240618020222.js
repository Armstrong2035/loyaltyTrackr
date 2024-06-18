import React from "react";
import { Signup } from "./Authentication/Signup";
import { HomePage } from "./Home/Home";
import { BusinessDetails } from "./Onboarding/BusinessDetails/BusinessDetails";
import { Login } from "./Authentication/Login";
import { Route, Routes } from "react-router-dom";
import { Onboarding } from "./Onboarding/Onboarding";
import { LoyaltySetup } from "./Onboarding/LoyaltySetup/LoyaltySetup";
import { LoyaltyPathways } from "./Onboarding/LoyaltySetup/LoyaltyPathways";
import { PointsPerPurchase } from "./Onboarding/LoyaltySetup/PointsBased/PointsPerPurchase";
import { RedemptionOption } from "./Onboarding/LoyaltySetup/PointsBased/RedemptionOptions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/onboarding/business-details"
          element={<BusinessDetails />}
        />
        <Route path="/onboarding/loyalty-setup" element={<LoyaltySetup />} />
        <Route
          path="/onboarding/loyalty-setup/loyalty-pathways"
          element={<LoyaltyPathways />}
        />
        <Route
          path="/onboarding/loyalty-setup/loyalty-pathways/points-per-purchase"
          element={<PointsPerPurchase />}
        />
        <Route
          path="/onboarding/loyalty-setup/loyalty-pathways/redemption-options"
          element={<RedemptionOption />}
        />
      </Routes>
    </>
  );
}

export default App;
