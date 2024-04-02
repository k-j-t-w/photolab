import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    toggleFav,
    openModal,
    closeModal,
    selectPhotoId,
    getPhotosByTopic,
    toggleDark,
  } = useApplicationData();

  return (
    <div className={`App ${state.darkToggle ? 'dark' : ''}`}>
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favArr={state.favArr}
        openModal={openModal}
        selectPhotoId={selectPhotoId}
        toggleFav={toggleFav}
        getPhotosByTopic={getPhotosByTopic}
        toggleDark={toggleDark}
        darkToggle={state.darkToggle}
      />
      {state.loadingState && <div>Loading...</div>}
      {state.displayModal && (
        <PhotoDetailsModal
          closeModal={closeModal}
          currentPhoto={state.currentPhoto}
          photos={state.photoData}
          toggleFav={toggleFav}
          favArr={state.favArr}
          openModal={openModal}
          selectPhotoId={selectPhotoId}
          darkToggle={state.darkToggle}
        />
      )}
    </div>
  );
};

export default App;
