import "./App.css";
import Header from "./Components/Header/Header";
import WeekContainer from "./Components/WeekContainer/WeekContainer";
import React, { useEffect, useState } from "react";
import { getForecast } from "./Service/OpenWeather";
import SearchCity from "./Components/SearchCity/SearchCity";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { handleErrorMessage } from "./Service/HandleErrors";

const forecastsPerDayCount = 8;

function App() {
   const [weekForecast, setWeekForecast] = useState(null);
   const [error, setError] = useState(null);
   const [city, setCity] = useState("Saint Petersburg");

   const theme = createTheme({
      palette: {
         primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
         },
         secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
         },
      },
   });
   const changeCityHandler = (city) => {
      setCity(city);
   };

   const fetchData = async (city) => {
      try {
         const forecast = await getForecast(city);

         const forecastsPerDay = [];

         forecast.list.forEach((el, idx) => {
            const day = parseInt(idx / forecastsPerDayCount);

            if ((idx / forecastsPerDayCount) % 1 === 0) {
               forecastsPerDay[day] = [];
            }
            forecastsPerDay[day].push(el);
         });

         forecast.list = forecastsPerDay;
         setError(null)
         setWeekForecast(forecast);
      } catch (e) {
         const handledError = handleErrorMessage(e.cod)
         setError(handledError);
         return;
      }
   };

   useEffect(() => {
      fetchData(city);
   }, [city]);

   return (
      <div className="App">
         <div className="wrapper">
            <ThemeProvider theme={theme}>
               <Header daysCount={weekForecast?.list.length} />
               <SearchCity city={city} changeCityHandler={changeCityHandler} error={error}/>
               <WeekContainer weekForecast={weekForecast} />
            </ThemeProvider>
         </div>
      </div>
   );
}

export default App;
