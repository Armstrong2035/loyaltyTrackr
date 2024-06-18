import { Typography, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export const HeroSection = () => {
  return (
    <div id="hero-page" style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item md={8} lg={8}>
          <Container>
            <Stack>
              <Typography variant="h4">
                Launch a customer loyalty campain in 5 minutes!
              </Typography>

              <Typography variant="h6">
                Improve your customer retention rate with our simple but
                effective customer loyalty solution! If you collect orders
                manually, you can track loyalty points with just two clicks. If
                you use Shopify or Woo Commerce, our plugins are coming soon.
              </Typography>

              <Typography variant="h6"></Typography>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};
