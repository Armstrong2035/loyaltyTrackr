import React from "react";
import { Container, Stack, Box, Typography, Card } from "@mui/material";

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

          <Typography>Step 3/4</Typography>
        </Stack>
      </Container>
    </>
  );
};
