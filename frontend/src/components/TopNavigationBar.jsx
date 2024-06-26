import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, favArr, getPhotosByTopic }) => {
  const handleClick = () => {
    getPhotosByTopic();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge selected={!!true} favArr={favArr} />
    </div>
  );
};

export default TopNavigation;
