import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photo, favArr, toggleFav }) {
  const clickHandler = () => {
    toggleFav(photo.id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favArr.includes(photo.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
