import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import "./style.scss";

function SearchCity({ city, changeCityHandler, error }) {
   const [inputValue, setInputValue] = useState("");
   const [errorMessage, setErrorMessage] = useState(null);

   useEffect(() => {
      if (city) setInputValue(city);
   }, [city]);

   const handleChange = (e) => {
      setInputValue(e.target.value);
   };

   const submitForm = (e) => {
      e.preventDefault();
      if (!inputValue.length) {
         setErrorMessage("Необходимо ввести город");
      } else {
         changeCityHandler(inputValue);
         setErrorMessage(null);
      }
   };

   useEffect(() => {
      setErrorMessage(error);
   }, [error]);

   return (
      <form className="search-city-container" onSubmit={submitForm}>
         <TextField
            label={errorMessage ? errorMessage : "Введите название города..."}
            id="filled-start-adornment"
            fullWidth
            value={inputValue}
            onChange={handleChange}
            error={errorMessage ? true : false}
            variant="filled"
         />
      </form>
   );
}

export default SearchCity;
