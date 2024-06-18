import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export const HeroSection = () => {
  return (
    <div id="hero-page" style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item md={8} lg={8}>
          <Typography variant="h4">
            Launch a customer loyalty campain in 5 minutes!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
