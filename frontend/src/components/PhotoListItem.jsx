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
  <>
    <div key={props.sampleDataForPhotoListItem.id} className='photo-list__item'>
      <img src={props.sampleDataForPhotoListItem.imageSource} alt="Photo" className='photo-list__image'/>
      <img src={props.sampleDataForPhotoListItem.profile} alt="Profile Photo" className='photo-list__user-profile' />
      <span className='userName'>{props.sampleDataForPhotoListItem.username}</span>
      <span className='location'>
        {props.sampleDataForPhotoListItem.location.city}
        {props.sampleDataForPhotoListItem.location.country}
      </span>
    </div>
  </>
  );
};

export default PhotoListItem;
