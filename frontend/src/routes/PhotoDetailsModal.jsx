import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  closeModal,
  currentPhoto,
  photos,
  favArr,
  toggleFav,
  openModal,
  selectPhotoId,
  darkToggle,
}) => {
  let currentPhotoData = "";
  if (currentPhoto) {
    currentPhotoData = photos.find((photo) => photo.id === currentPhoto);
  }
  const similarPhotos = Object.values(currentPhotoData.similar_photos);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image-container">
          <PhotoFavButton
            photo={currentPhotoData}
            favArr={favArr}
            toggleFav={toggleFav}
            darkToggle={darkToggle}
          />
          <img
            src={currentPhotoData.urls.full}
            alt="Large Modal Photo"
            className="photo-details-modal__image"
          />

          <div className="photo-details-modal__photographer-details">
            <img
              src={currentPhotoData.user.profile}
              alt="Profile Photo"
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              {currentPhotoData.user.username}
              <div className="photo-details-modal__photographer-location">
                {currentPhotoData.location.city},
                {currentPhotoData.location.country}
              </div>
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList
          photos={similarPhotos}
          toggleFav={toggleFav}
          favArr={favArr}
          modal="modal"
          openModal={openModal}
          selectPhotoId={selectPhotoId}
          darkToggle={darkToggle}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
