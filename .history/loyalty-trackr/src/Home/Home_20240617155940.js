import React, { useState, MouseEvent } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const HomePage = () => {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = (event) => {
    setAnchorNav(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
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
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuList>
                <MenuItem onClick={closeMenu}>Login</MenuItem>
                <MenuItem onClick={closeMenu}>Pricing</MenuItem>
                <MenuItem onClick={closeMenu}>Features</MenuItem>
                <MenuItem onClick={closeMenu}>Resources</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            color="inherit"
            aria-label="LoyaltyTrackr"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LoyaltyTrackr
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
