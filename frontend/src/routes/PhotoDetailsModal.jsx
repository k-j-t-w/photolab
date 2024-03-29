import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({closeModal, currentPhoto, photos}) => {
  let currentPhotoData = '';
  if (currentPhoto) {
   currentPhotoData = photos.find(photo => photo.id === currentPhoto)
  };
  const similarPhotos = Object.values(currentPhotoData.similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
      <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
      <img src={currentPhotoData.urls.full} alt="Large Modal Photo" className='photo-details-modal__image'/>
          <div className='photo-list__user-details'>
            <img src={currentPhotoData.user.profile} alt="Profile Photo" className='photo-list__user-profile' />
            <div className='photo-list__user-info'>
              {currentPhotoData.user.username}
              <div className='photo-list__user-location'>
                {currentPhotoData.location.city},
                {currentPhotoData.location.country}
              </div>
            </div>
          </div>
          <div className='photo-details-modal__header'>Similar Photos</div>
        <PhotoList photos={similarPhotos}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
