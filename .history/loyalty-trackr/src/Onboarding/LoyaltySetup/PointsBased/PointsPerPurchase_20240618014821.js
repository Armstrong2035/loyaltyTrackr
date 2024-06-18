import {
  FormGroup,
  TextField,
  Select,
  Box,
  Typography,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { currencies } from "../../../Utility/currencies";
import { onBoardingStore } from "../../Store/Store";
import { userId } from "../../../Firebase/firebase";

const currencyArray = currencies;

export const PointsPerPurchase = () => {
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState(0);

  const setPointsPerPurchase = onBoardingStore(
    (state) => state.setPointsPerPurchase
  );

  const pointsPerPurchase = onBoardingStore((state) => state.pointsPerPurchase);

  const sendPointsPerPurchaseToStore = () => {
    const pointsPerPurchase = {
      points: 1,
      pricePerPurchase: {
        amount: price,
        currency: currency,
      },
    };

    setPointsPerPurchase(pointsPerPurchase);
  };

  // useEffect(() => {
  //   console.log(pointsPerPurchase);
  // }, [pointsPerPurchase]);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack spacing={5}>
            <Box>
              <Typography variant="h4">Points Based Loyalty Setup</Typography>
            </Box>

            <Typography>Step 2/5</Typography>
            <Stack>
              <Typography>
                How much does a customer have to spend to earn a point?
              </Typography>

              <Select
                id="select-currency"
                value={currency}
                label="Currency"
                onChange={(e) => setCurrency(e.target.value)}
              >
                {currencyArray.map((currency) => (
                  <MenuItem
                    key={currency}
                    value={currency}
                  >{`${currency}`}</MenuItem>
                ))}
              </Select>

              <TextField
                id="price"
                label="Price per Points"
                variant="outlined"
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />

              <Button onClick={sendPointsPerPurchaseToStore}>Done</Button>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
};
