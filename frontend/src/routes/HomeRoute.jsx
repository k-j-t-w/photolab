import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, favArr, addToFavArr, openModal, setCurrentPhoto, removeFromFavArr}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favArr={favArr}/>
      <PhotoList photos={photos} addToFavArr={addToFavArr} openModal={openModal} setCurrentPhoto={setCurrentPhoto} favArr={favArr} removeFromFavArr={removeFromFavArr}/>
    </div>
  );
};

export default HomeRoute;