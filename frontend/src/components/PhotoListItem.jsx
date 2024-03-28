import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (props) => {
  return (
  <div key={props.sampleDataForPhotoListItem.id}>
    {props.sampleDataForPhotoListItem.username}
    {props.sampleDataForPhotoListItem.imageSource}
    {props.sampleDataForPhotoListItem.location.city}
    {props.sampleDataForPhotoListItem.location.country}
    {props.sampleDataForPhotoListItem.profile}
  </div>
  );
};

export default PhotoListItem;
