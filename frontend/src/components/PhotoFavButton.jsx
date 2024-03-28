import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [fav, setFav] = useState(false);
  const clickHandler = () => setFav(prevFav => !prevFav)

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;