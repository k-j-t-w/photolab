import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, favArr, openModal, selectPhotoId, toggleFav}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favArr={favArr}/>
      <PhotoList photos={photos} openModal={openModal} selectPhotoId={selectPhotoId} favArr={favArr} toggleFav={toggleFav}/>
    </div>
  );
};

export default HomeRoute;