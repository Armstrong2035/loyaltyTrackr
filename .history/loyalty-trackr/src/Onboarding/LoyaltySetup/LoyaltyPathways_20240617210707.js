import React from "react";
import { Container, Stack, Box, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";

export const LoyaltyPathways = () => {
  return (
    <>
      <Container sx={{ marginTop: "20px" }}>
        <Stack spacing={5}>
          <Box>
            <Typography variant="h4">Campaign Setup</Typography>
            <Typography variant="h6">
              Let's setup your loyalty campaign
            </Typography>
          </Box>

          <Stack direction="column" spacing={3}>
            <Box>
              <Typography>Points Based Loyalty</Typography>
              <Typography>
                Customers earn points for purchases, which can be redeemed for
                rewards.
              </Typography>
            </Box>

            <Box>
              <Typography>Tier Based Loyalty</Typography>
              <Typography>
                Customers achieve different status levels (e.g., Bronze, Silver,
                Gold) based on their spending.
              </Typography>
            </Box>

            <Box>
              <Typography>Cashback</Typography>
              <Typography>
                Customers receive a percentage of their purchase amount back as
                a reward.
              </Typography>
            </Box>
          </Stack>

          <Typography>Step 3/4</Typography>
        </Stack>
      </Container>
    </>
  );
};
