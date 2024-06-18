import React from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";

export const LoyaltyPathways = () => {
  const layout = {
    // position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <div style={layout}>
          <Container sx={{ marginTop: "20px" }}>
            <Stack spacing={5}>
              <Box>
                <Typography variant="h4">Campaign Setup</Typography>
                <Typography variant="h6">
                  Let's setup your loyalty campaign
                </Typography>
              </Box>

              <Typography>Step 3/4</Typography>

              <Stack direction="column" spacing={5}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#1565C0",
                    minHeight: "150px",
                    dispaly: "flex",
                    alignContent: "center",
                  }}
                >
                  <Typography>Points Based Loyalty</Typography>
                  <Typography>
                    Customers earn points for purchases, which can be redeemed
                    for rewards.
                  </Typography>
                </Card>

                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#1565C0",
                    minHeight: "150px",
                  }}
                >
                  <CardHeader>
                    <Typography>Tier Based Loyalty</Typography>
                  </CardHeader>

                  <CardContent>
                    <Typography>
                      Customers achieve different status levels (e.g., Bronze,
                      Silver, Gold) based on their spending.
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#1565C0",
                    minHeight: "150px",
                    dispay: "flex",
                    alignContent: "center",
                  }}
                >
                  <Typography>Cashback</Typography>
                  <Typography>
                    Customers receive a percentage of their purchase amount back
                    as a reward.
                  </Typography>
                </Card>
              </Stack>
            </Stack>
          </Container>
        </div>
      </div>
    </>
  );
};
