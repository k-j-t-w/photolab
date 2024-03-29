import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({selected, totalFav}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!totalFav} selected={selected} />
    </div>
  ) 
};

export default FavBadge;