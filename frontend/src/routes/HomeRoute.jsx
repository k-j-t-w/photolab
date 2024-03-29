import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, totalFav, setTotalFav, openModal}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} totalFav={totalFav}/>
      <PhotoList photos={photos} setTotalFav={setTotalFav} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;