import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos.js"
import topics from "./mocks/topics.js"
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [favArr, setFavArr] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const addToFavArr = (id) => {
    setFavArr((prevFav) => [...prevFav, id]);
  };
  const removeFromFavArr = (id) => {
    setFavArr((prevFavArr) => prevFavArr.filter((FavId) => FavId !== id));
  }
  const openModal = () => {
    setDisplayModal(true)
  };
  const closeModal = () => {
    setDisplayModal(false)
  };
  
  return (
    <div className="App">
      favArr: {favArr}
      <HomeRoute photos={photos} topics={topics} favArr={favArr} openModal={openModal} setCurrentPhoto={setCurrentPhoto} addToFavArr={addToFavArr} removeFromFavArr={removeFromFavArr}/>
      {displayModal && <PhotoDetailsModal closeModal={closeModal} currentPhoto={currentPhoto} photos={photos} addToFavArr={addToFavArr} removeFromFavArr={removeFromFavArr} favArr={favArr}/>}
    </div>
  );
};

export default App;