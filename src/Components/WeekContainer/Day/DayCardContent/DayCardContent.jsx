import { CardContent, Typography } from "@mui/material";
import React from "react";

function DayCardContent({ dayDate, forecastPeriod }) {
   return (
      <CardContent>
         <Typography gutterBottom variant="h4" component="div">
            {dayDate}
         </Typography>
         <Typography gutterBottom variant="h5" component="div">
            {forecastPeriod?.main?.temp} °C
         </Typography>
         <Typography variant="body2">
            {forecastPeriod?.weather?.[0].description}
         </Typography>
      </CardContent>
   );
}

export default DayCardContent;
