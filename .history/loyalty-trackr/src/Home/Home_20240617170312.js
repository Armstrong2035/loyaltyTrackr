import { NavBar } from "./Containers/NavBar";
import { HeroSection } from "./Containers/HeroSection";
import Stack from "@mui/material/Select/SelectInput";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <Stack spacing={5}>
        <NavBar />
        <HeroSection />
      </Stack>
    </>
  );
};
