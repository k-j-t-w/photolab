import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, totalFav, setTotalFav}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} totalFav={totalFav} setTotalFav={setTotalFav}/>
      ))}
    </ul>
  );
};

export default PhotoList;
