import React from "react";
import "../styles/TopNavigationBar.scss";


const DarkToggle = ({darkToggle, toggleDark}) => {
  const handleToggle = () => {
    toggleDark();
  }
  return (
    <button onClick={handleToggle} className='dark-button'>
      {darkToggle ? '🔆' : '🌙'}
    </button>
  );
};

export default DarkToggle;
