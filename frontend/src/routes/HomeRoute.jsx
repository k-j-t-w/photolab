import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

const HomeRoute = ({
  photos,
  topics,
  favArr,
  openModal,
  selectPhotoId,
  toggleFav,
  getPhotosByTopic,
  toggleDark,
  darkToggle,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favArr={favArr}
        getPhotosByTopic={getPhotosByTopic}
        toggleDark={toggleDark}
        darkToggle={darkToggle}
      />
      <PhotoList
        photos={photos}
        openModal={openModal}
        selectPhotoId={selectPhotoId}
        favArr={favArr}
        toggleFav={toggleFav}
        darkToggle={darkToggle}
      />
    </div>
  );
};

export default HomeRoute;
