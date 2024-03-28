import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {/* {sampleDataForPhotoListItem.map((photo, index) => 
       <PhotoListItem key={index} photo={photo} imageSource={photo.imageSource} /> 
       )} */}
      <PhotoList />
    </div>
  );
};

export default App;