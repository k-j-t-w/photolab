import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({photo, totalFav, setTotalFav}) => {
  return (
    <>
        <div className='photo-list__item'>
          <PhotoFavButton totalFav={totalFav} setTotalFav={setTotalFav}/>
          <img src={photo.urls.regular} alt="Photo" className='photo-list__image'/>
          <div className='photo-list__user-details'>
            <img src={photo.user.profile} alt="Profile Photo" className='photo-list__user-profile' />
            <div className='photo-list__user-info'>
              {photo.user.username}
              <div className='photo-list__user-location'>
                {photo.location.city},
                {photo.location.country}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};


export default PhotoListItem;
