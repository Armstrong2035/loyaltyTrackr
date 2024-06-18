import { NavBar } from "./Containers/NavBar";
import { HeroSection } from "./Containers/HeroSection";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <Stack>
        <NavBar />
        <HeroSection />
      </Stack>
    </>
  );
};
