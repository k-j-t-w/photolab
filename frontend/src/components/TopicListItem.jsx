import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const handleClick = () => {
    props.getPhotosByTopic(props.id)
  }
  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{props.topic}</span>
    </div>
  );
};

export default TopicListItem;
