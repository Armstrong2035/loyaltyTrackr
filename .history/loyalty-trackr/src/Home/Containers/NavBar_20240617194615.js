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

export const NavBar = () => {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = (event) => {
    setAnchorNav(null);
  };

  return (
    <div>
      <AppBar position="static" color="secondary">
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
            <Link to={"/login"}>
              <Button color="primary.light">Login</Button>
            </Link>

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
              anchorEl={anchorNav}
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuList>
                <Link to={"/login"}>
                  <MenuItem onClick={closeMenu}>Login</MenuItem>
                </Link>

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
