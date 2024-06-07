import React from "react";
import { Signup } from "./Authentication/Signup";
import { HomePage } from "./Home/Home";
import { BusinessDetails } from "./Onboarding/BusinessDetails";
import Login from "./Authentication/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/business-details" element={<BusinessDetails />} />
      </Routes>
    </>
  );
}

export default App;
