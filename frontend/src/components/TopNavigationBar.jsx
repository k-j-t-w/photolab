import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import DarkToggle from "./DarkToggle";

const TopNavigation = ({ topics, favArr, getPhotosByTopic, toggleDark, darkToggle }) => {
  const handleClick = () => {
    getPhotosByTopic();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <div className="top-nav-bar__icons">
        <DarkToggle toggleDark={toggleDark} darkToggle={darkToggle}/>
        <FavBadge selected={!!true} favArr={favArr} darkToggle={darkToggle} />
      </div>
    </div>
  );
};

export default TopNavigation;
