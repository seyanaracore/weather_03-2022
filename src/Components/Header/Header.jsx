import React from "react";
import "./style.scss";

function Header({ daysCount }) {
   return (
      <header>
         <h3>Прогноз погоды на {daysCount} дн.</h3>
      </header>
   );
}

export default Header;
