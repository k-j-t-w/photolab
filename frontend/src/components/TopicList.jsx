import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics.js"

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
         <TopicListItem key={topic.id} topic={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
