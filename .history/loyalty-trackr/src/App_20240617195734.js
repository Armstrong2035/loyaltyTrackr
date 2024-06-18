import React from "react";
import { Signup } from "./Authentication/Signup";
import { HomePage } from "./Home/Home";
import { BusinessDetails } from "./Onboarding/BusinessDetails/BusinessDetails";
import { Login } from "./Authentication/Login";
import { Route, Routes } from "react-router-dom";
import { Onboarding } from "./Onboarding/Onboarding";
import { LoyaltySetup } from "./Onboarding/LoyaltySetup/LoyaltySetup";

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
      </Routes>
    </>
  );
}

export default App;
