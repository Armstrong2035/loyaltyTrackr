import React, { useState } from "react";

const PointsBased = () => {
  /*
    pointsPerPurchase = ppp
    redemptionThreshold = rt
    pointsExpirationPeriod = per
    maximumPointsPerPurchase = mppp
    */
  const [ppp, setPpp] = useState(null);
  const [rt, setRt] = useState(null);
  const [pep, setPep] = usestate(null);
  const [mppp, setMppp] = useState(null);

  const handlePointsChange = (e) => {
    setPpp(e.target.value);
  };

  const campaignDetails = {
    points: ppp,
    redemption: [
      {
        pointsNeeded,
        prizeRedeemable: [],
      },
    ],
    expiration: pep,
    maximum,
  };

  return (
    <>
      <FormGroup></FormGroup>
    </>
  );
};
