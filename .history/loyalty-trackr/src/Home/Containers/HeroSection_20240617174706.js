import { Typography, Container, Stack, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Heroimage from "../../Utility/Heroimage.jpg";

export const HeroSection = () => {
  return (
    <div
      id="hero-page"
      style={{
        marginTop: "20px",
        height: "100vh",
        backgroundImage: `url(${Heroimage})`,
      }}
    >
      <Grid container alignItems={"center"}>
        <Grid item md={8} lg={8}>
          <Container>
            <Stack spacing={1}>
              <Typography variant="h4">
                Launch a customer loyalty campain in 5 minutes!
              </Typography>

              <Typography variant="h6">
                Improve your customer retention rate with our simple but
                effective customer loyalty solution! If you collect orders
                manually, you can track loyalty points with just two clicks. If
                you use Shopify or Woo Commerce, our plugins are coming soon.
              </Typography>

              <Typography variant="h6">Useful for:</Typography>

              <Typography variant="h6">1. Points based loyalty</Typography>

              <Typography variant="h6">2. Tiered Membership plans</Typography>

              <Typography variant="h6">3. Cashback scheme</Typography>
            </Stack>
          </Container>
        </Grid>

        <Grid item md={4} lg={4}>
          <Container>
            <Box sx={{ maxHeight: "70%" }}>
              {/* <img
                src={}
                style={{ objectFit: "contain", width: "100%" }}
              /> */}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};
