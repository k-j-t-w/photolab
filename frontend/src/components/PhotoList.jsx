import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, openModal, setCurrentPhoto, favArr, toggleFav, modal}) => {
  return (
    <ul className="photo-list" id={modal}>
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} openModal={openModal} setCurrentPhoto={setCurrentPhoto} favArr={favArr} toggleFav={toggleFav} modal={modal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
