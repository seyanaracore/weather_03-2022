import React from "react";
import "./style.scss";

function Day({ day }) {
   return (
      <div className="card">
         <div className="forecast-periods-block">
            <button>00</button>
            <button>03</button>
            <button>06</button>
            <button>09</button>
            <button>13</button>
            <button>15</button>
            <button>18</button>
            <button>21</button>
         </div>
      </div>
   );
}

export default Day;
