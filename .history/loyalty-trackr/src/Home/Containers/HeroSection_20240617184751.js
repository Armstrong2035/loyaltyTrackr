import { Typography, Container, Stack, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Heroimage from "../../Utility/Heroimage.jpg";

export const HeroSection = () => {
  const overlayStyle = {
    // position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Black with 50% opacity
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const backgroundImageStyle = {
    height: "100vh",
    backgroundImage: `url(${Heroimage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
  };
  return (
    <div id="hero-page" style={backgroundImageStyle}>
      <div style={overlayStyle}>
        <Container>
          <Stack spacing={5}>
            <Box>
              <Typography variant="h3">
                Launch a customer loyalty campain in 5 minutes!
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5">
                Improve your customer retention rate with our simple but
                effective customer loyalty solution! If you collect orders
                manually, you can track loyalty points with just two clicks. If
                you use Shopify or Woo Commerce, our plugins are coming soon.
              </Typography>

              <Typography variant="h6">Useful for:</Typography>

              <Typography variant="h6">1. Points based loyalty</Typography>

              <Typography variant="h6">2. Tiered Membership plans</Typography>

              <Typography variant="h6">3. Cashback scheme</Typography>
            </Box>
          </Stack>

          <Button variant="Contained">Get Started</Button>
        </Container>
      </div>
    </div>
  );
};
