import { Button } from "@mui/material";
import React from "react";

function PeriodButton({ period, periodButtonHandler, isActive }) {
   const periodTime = period.dt_txt.split(" ")[1];

   const setPeriod = () => {
      periodButtonHandler(periodTime);
   };

   return (
      <Button
         size="small"
         variant="outlined"
         color={isActive ? "success" : "secondary"}
         onClick={setPeriod}
      >
         {periodTime.slice(0, 2)}
      </Button>
   );
}

export default PeriodButton;
