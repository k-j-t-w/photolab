import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({setTotalFav}) {
  const [fav, setFav] = useState(false);
  const clickHandler = () => { 
    setFav(prevFav => !prevFav);
    setTotalFav(prevTotalFav => fav ? prevTotalFav - 1 : prevTotalFav + 1);
  }


  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;