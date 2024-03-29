import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos.js"
import topics from "./mocks/topics.js"
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [totalFav, setTotalFav] = useState(0);
  const [displayModal, setDisplayModal] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(null)
  const openModal = () => {
    setDisplayModal(true)
  }
  const closeModal = () => {
    setDisplayModal(false)
  }
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} totalFav={totalFav} setTotalFav={setTotalFav} openModal={openModal} setCurrentPhoto={setCurrentPhoto}/>
      {displayModal && <PhotoDetailsModal closeModal={closeModal} currentPhoto={currentPhoto} photos={photos}/>}
    </div>
  );
};

export default App;