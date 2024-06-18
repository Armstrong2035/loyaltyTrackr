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
            color="inherit"
            aria-label="LoyaltyTrackr"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            LoyaltyTrackr
          </Typography>

          <Box>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Resources</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
