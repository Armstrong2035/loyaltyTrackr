import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div>
        <Stack>
          <Typography>
            Want to launch a customer loyalty camapaign in five minutes? Use
            LoyaltyTrackr
          </Typography>

          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
        </Stack>
      </div>
    </>
  );
};
