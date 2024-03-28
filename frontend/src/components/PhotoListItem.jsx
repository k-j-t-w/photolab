import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const photos = props.sampleDataForPhotoListItem;
  return (
    <>
      {photos.map((photo) => (
        <div key={photo.id} className='photo-list__item'>
          <img src={photo.imageSource} alt="Photo" className='photo-list__image'/>
          <img src={photo.profile} alt="Profile Photo" className='photo-list__user-profile' />
          <div className='photo=list__user-info'>{photo.username}</div>
          <div className='photo-list__user-location'>
            {photo.location.city},
            {photo.location.country}
          </div>
        </div>
      ))}
    </>
  );
};


export default PhotoListItem;
