import React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Resources</Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" edge="end"></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
