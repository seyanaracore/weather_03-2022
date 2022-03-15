import React, { useEffect, useState } from "react";
import Day from "./Day/Day";
import "./style.scss";

function WeekContainer({ weekForecast }) {
   const [daysList, setDaysList] = useState([]);

   useEffect(() => {
      weekForecast && setDaysList(weekForecast);
   }, [weekForecast]);

   return (
      <>
         <div className="week-container">
            <div className="forecast-block">
               {daysList?.list?.map((dayPeriods, idx) => {
                  return <Day dayPeriods={dayPeriods} key={idx} />;
               })}
            </div>
         </div>
      </>
   );
}

export default WeekContainer;
