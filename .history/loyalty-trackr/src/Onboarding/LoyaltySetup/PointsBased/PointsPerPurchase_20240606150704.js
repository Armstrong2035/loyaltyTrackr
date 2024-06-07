import { TextField } from "@mui/material";
import React, { useState } from "react";

const PointsPerPurchase = () => {

  const [pointsPerPurchase, setPointsPerPurchase] = useState({points: undefined, purpchase: undefined})
}



  return (
    <>
      <FormGroup>
        <Stack id="points-per-purchase">
          <Typography>Your customer gets</Typography>
          <TextField id="points" value={ppp.points} label />
        </Stack>
      </FormGroup>
    </>
  );
};
