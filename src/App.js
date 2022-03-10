import "./App.css";
import Header from "./Components/Header/Header";
import WeekContainer from "./Components/WeekContainer/WeekContainer";
import React, { useEffect, useState } from "react";
import { getForecast } from "./Components/Service/OpenWeather";

const forecastsPerDay = 8;

function App() {
   const [weekForecast, setWeekForecast] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
      getForecast()
         .then((forecast) => {
            console.log(forecast);
            const forecastForDays = [];

            forecast.list.forEach((el, idx) => {
              console.log(el)
               if ((idx + 1) / forecastsPerDay % 1 === 0) {
                  forecastForDays[Math.ceil(idx / forecastsPerDay)] = [];
               }

              //  forecastForDays[Math.ceil(idx / forecastsPerDay)].push(el);
            });

            console.log(forecastForDays)

            forecast.list = forecastForDays;


            setWeekForecast(forecast);
         })
         .catch((e) => {
            setError(e.message);
         });
   }, []);

   return (
      <div className="App">
         <Header daysCount={weekForecast?.cnt / 5} />
         <WeekContainer weekForecast={weekForecast} />
      </div>
   );
}

export default App;
