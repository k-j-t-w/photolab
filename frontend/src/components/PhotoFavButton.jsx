import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({totalFav, setTotalFav}) {
  const [fav, setFav] = useState(false);
  const clickHandler = () => { 
    fav && setTotalFav(prevTotalFav => prevTotalFav - 1);
    setFav(prevFav => !prevFav);
    !fav && setTotalFav(prevTotalFav => prevTotalFav + 1);
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