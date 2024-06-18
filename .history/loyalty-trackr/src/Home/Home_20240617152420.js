import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";

export const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start">LoyaltyTrackr</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
