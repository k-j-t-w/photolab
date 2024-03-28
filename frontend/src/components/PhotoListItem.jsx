import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <>
      {console.log(props)}
        <div className='photo-list__item'>
          <img src={props.photo.imageSource} alt="Photo" className='photo-list__image'/>
          <img src={props.photo.profile} alt="Profile Photo" className='photo-list__user-profile' />
          <div className='photo=list__user-info'>{props.photo.username}</div>
          <div className='photo-list__user-location'>
            {props.photo.location.city},
            {props.photo.location.country}
          </div>
        </div>
    </>
  );
};


export default PhotoListItem;
