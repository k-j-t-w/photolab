import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
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
      <HomeRoute photos={state.photoData} topics={state.topicData} favArr={state.favArr} openModal={openModal} selectPhotoId={selectPhotoId} toggleFav={toggleFav}/>
      {state.displayModal && <PhotoDetailsModal closeModal={closeModal} currentPhoto={state.currentPhoto} photos={state.photoData} toggleFav={toggleFav} favArr={state.favArr}/>}
    </div>
  );
};

export default App;