import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, favArr}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__right'>
        <TopicList topics={topics}/>
        <FavBadge selected={!!true} favArr={favArr}/>
      </div>
    </div>
  )
}

export default TopNavigation;