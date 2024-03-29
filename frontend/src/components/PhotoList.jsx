import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, addToFavArr, openModal, setCurrentPhoto, favArr, removeFromFavArr}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} addToFavArr={addToFavArr} openModal={openModal} setCurrentPhoto={setCurrentPhoto} favArr={favArr} removeFromFavArr={removeFromFavArr}/>
      ))}
    </ul>
  );
};

export default PhotoList;
