import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

function SearchCity({ city }) {
   const [values, setValues] = useState(city);

   const handleChange = (e) => {
      setValues(e.target.value);
   };

   return (
      // <FormControl fullWidth sx={{ m: 1 }}>
      //    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      //    <OutlinedInput
      //       id="outlined-adornment-amount"
      //       value={values.amount}
      //       onChange={handleChange("amount")}
      //       startAdornment={<InputAdornment position="start">$</InputAdornment>}
      //       label="Amount"
      //    />
      // </FormControl>
      <TextField
         label="Enter city name"
         id="filled-start-adornment"
         fullWidth
         // sx={{ m: 1, width: "25ch" }}
         // value={values}
         onChange={handleChange}
         InputProps={{
            startAdornment: (
               <InputAdornment position="start">City: </InputAdornment>
            ),
            // onChange: handleChange,
            // value: values,
         }}
         variant="filled"
      />
   );
}

export default SearchCity;
