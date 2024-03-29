import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, setTotalFav, openModal}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} setTotalFav={setTotalFav} openModal={openModal} />
      ))}
    </ul>
  );
};

export default PhotoList;
