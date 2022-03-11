import {
   FormControl,
   InputAdornment,
   InputLabel,
   OutlinedInput,
} from "@mui/material";
import React from "react";

function SearchCity({ city }) {
   const [values, setValues] = React.useState({
      amount: "",
   });

   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
   };

   return (
      <FormControl fullWidth sx={{ m: 1 }}>
         <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
         <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
         />
      </FormControl>
   );
}

export default SearchCity;
