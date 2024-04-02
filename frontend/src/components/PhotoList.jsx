import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  openModal,
  selectPhotoId,
  favArr,
  toggleFav,
  modal,
  darkToggle
}) => {
  return (
    <ul className="photo-list" id={modal}>
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          openModal={openModal}
          selectPhotoId={selectPhotoId}
          favArr={favArr}
          toggleFav={toggleFav}
          modal={modal}
          darkToggle={darkToggle}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
