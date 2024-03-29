import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, openModal, setCurrentPhoto, favArr, toggleFav}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} openModal={openModal} setCurrentPhoto={setCurrentPhoto} favArr={favArr} toggleFav={toggleFav}/>
      ))}
    </ul>
  );
};

export default PhotoList;
