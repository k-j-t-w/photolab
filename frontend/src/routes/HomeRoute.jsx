import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, favArr, openModal, setCurrentPhoto, toggleFav}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favArr={favArr}/>
      <PhotoList photos={photos} openModal={openModal} setCurrentPhoto={setCurrentPhoto} favArr={favArr} toggleFav={toggleFav}/>
    </div>
  );
};

export default HomeRoute;