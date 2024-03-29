import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({selected, favArr}) => {
  let displayAlert;
  favArr.length > 0 ? displayAlert = true : displayAlert = false;
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={displayAlert} selected={selected} />
    </div>
  ) 
};

export default FavBadge;