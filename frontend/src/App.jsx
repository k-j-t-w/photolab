import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from "./mocks/photos.js"
import topics from "./mocks/topics.js"

const App = () => {
  const [totalFav, setTotalFav] = useState(0);
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} totalFav={totalFav} setTotalFav={setTotalFav}/>
    </div>
  );
};

export default App;