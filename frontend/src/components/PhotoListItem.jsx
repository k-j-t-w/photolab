import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  openModal,
  selectPhotoId,
  favArr,
  toggleFav,
  modal,
}) => {
  const handleClick = () => {
    openModal();
    selectPhotoId(photo.id);
  };
  return (
    <>
      <div className="photo-list__item">
        <PhotoFavButton photo={photo} favArr={favArr} toggleFav={toggleFav} />
        <img
          src={photo.urls.regular}
          alt="Photo"
          className="photo-list__image"
          id={modal}
          onClick={handleClick}
        />
        <div className="photo-list__user-details">
          <img
            src={photo.user.profile}
            alt="Profile Photo"
            className="photo-list__user-profile"
          />
          <div className="photo-list__user-info">
            {photo.user.username}
            <div className="photo-list__user-location">
              {photo.location.city},{photo.location.country}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoListItem;
