import "./App.css";
import Header from "./Components/Header/Header";
import WeekContainer from "./Components/WeekContainer/WeekContainer";
import React, { useEffect, useState } from "react";
import { getForecast } from "./Service/OpenWeather";
import SearchCity from "./Components/WeekContainer/SearchCity/SearchCity";

const forecastsPerDayCount = 8;

function App() {
   const [weekForecast, setWeekForecast] = useState(null);
   const [error, setError] = useState(null);

   const fetchData = async () => {
      try {
         const forecast = await getForecast();

         const forecastsPerDay = [];

         forecast.list.forEach((el, idx) => {
            const day = parseInt(idx / forecastsPerDayCount);

            if ((idx / forecastsPerDayCount) % 1 === 0) {
               forecastsPerDay[day] = [];
            }
            forecastsPerDay[day].push(el);
         });

         forecast.list = forecastsPerDay;
         console.log(forecast);

         setWeekForecast(forecast);
      } catch (e) {
         setError(e.message);
         return;
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="App">
         <div className="wrapper">
            <Header daysCount={weekForecast?.cnt / forecastsPerDayCount} />
            <SearchCity city={weekForecast?.city?.name} />
            <WeekContainer weekForecast={weekForecast} />
         </div>
      </div>
   );
}

export default App;
