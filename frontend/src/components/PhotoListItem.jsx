import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  return (
    <>
        <div className='photo-list__item'>
          <PhotoFavButton />
          <img src={props.photo.imageSource} alt="Photo" className='photo-list__image'/>
          <div className='photo-list__user-details'>
            <img src={props.photo.profile} alt="Profile Photo" className='photo-list__user-profile' />
            <div className='photo-list__user-info'>
              {props.photo.username}
              <div className='photo-list__user-location'>
                {props.photo.location.city},
                {props.photo.location.country}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};


export default PhotoListItem;
