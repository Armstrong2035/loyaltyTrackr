import React from "react";
import { Signup } from "./Authentication/Signup";
import { HomePage } from "./Home/Home";
import Login from "./Authentication/Login";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </>
  );
}

export default App;
