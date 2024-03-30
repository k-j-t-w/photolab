import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos.js"
import topics from "./mocks/topics.js"
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    toggleFav,
    openModal,
    closeModal,
    selectPhotoId
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favArr={state.favArr} openModal={openModal} selectPhotoId={selectPhotoId} toggleFav={toggleFav}/>
      {state.displayModal && <PhotoDetailsModal closeModal={closeModal} currentPhoto={state.currentPhoto} photos={photos} toggleFav={toggleFav} favArr={state.favArr}/>}
    </div>
  );
};

export default App;