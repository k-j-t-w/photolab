import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ selected, favArr, darkToggle }) => {
  let displayAlert;
  favArr.length > 0 ? (displayAlert = true) : (displayAlert = false);

  return (
    <div className="fav-badge">
      <FavIcon displayAlert={displayAlert} selected={selected} darkToggle={darkToggle}/>
    </div>
  );
};

export default FavBadge;
