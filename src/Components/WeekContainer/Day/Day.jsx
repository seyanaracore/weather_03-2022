import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import PeriodButton from "./PeriodButton/PeriodButton";
import DayCardContent from "./DayCardContent/DayCardContent";

function Day({ dayPeriods }) {
   const initialTimePeriod = "15:00:00";

   const [periods, setPeriods] = useState([]);
   const [forecastPeriod, setForecastsPeriod] = useState("");
   const [dayDate, setDayDate] = useState("");

   const sortPeriods = (periods) => {
      return periods.sort(function (a, b) {
         const timeA = +a.dt_txt.split(" ")[1].slice(0, 2);
         const timeB = +b.dt_txt.split(" ")[1].slice(0, 2);
         return timeA - timeB;
      });
   };
   const getDate = (ms) => {
      const date = new Date(ms);

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const weekDay = date.toLocaleString("ru", { weekday: "long" });
      return `${day}.${month}, ${weekDay}`;
   };
   const setActivePeriod = useCallback(
      (timePeriod) => {
         setForecastsPeriod(
            periods.find((period) => {
               return period.dt_txt.split(" ")[1] === timePeriod;
            })
         );
      },
      [periods]
   );

   useEffect(() => {
      if (dayPeriods) {
         setPeriods(sortPeriods(dayPeriods));
         setActivePeriod(initialTimePeriod);
         setDayDate(getDate(dayPeriods[0].dt * 1000));
      }
   }, [dayPeriods, periods, setActivePeriod]);

   return (
      <Card className="card">
         <DayCardContent dayDate={dayDate} forecastPeriod={forecastPeriod} />
         <CardActions className="day-periods-container">
            {periods.map((period, idx) => {
               return (
                  <PeriodButton
                     period={period}
                     isActive={period?.dt_txt === forecastPeriod?.dt_txt}
                     periodButtonHandler={setActivePeriod}
                     key={idx}
                  />
               );
            })}
         </CardActions>
      </Card>
   );
}

export default Day;
