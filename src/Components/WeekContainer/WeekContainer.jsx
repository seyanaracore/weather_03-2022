import React from "react";
import Day from "./Day/Day";
import "./style.scss";

function WeekContainer({ weekForecast }) {
   return (
      <>
         <div className="week-container">
            {/* <h4>
               Город: <span>{weekForecast?.city?.name}</span>
            </h4> */}
            <div className="forecast-block">
               {weekForecast?.list.map((day, idx) => {
                  return <Day day={day} key={idx} />;
               })}
            </div>
         </div>
      </>
   );
}

export default WeekContainer;
