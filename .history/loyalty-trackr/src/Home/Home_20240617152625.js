import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";

export const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            edge="start"
            color="inherit"
            aria-label="LoyaltyTrackr"
          >
            LoyaltyTrackr
          </Typography>

          <Box>
            <Button>Login</Button>
            <Button>Pricing</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
