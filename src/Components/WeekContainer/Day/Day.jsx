import React from "react";
import "./style.scss";

function Day({ day }) {
   return (
      <div className="card">
         <div className="forecast-periods-block">
            <button>00-03</button>
            <button>03-06</button>
            <button>06-09</button>
            <button>09-13</button>
            <button>13-15</button>
            <button>15-18</button>
            <button>18-21</button>
            <button>21-00</button>
         </div>
      </div>
   );
}

export default Day;
