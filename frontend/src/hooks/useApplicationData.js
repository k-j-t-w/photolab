import { useState } from 'react';

const useApplicationData = () => {

  const [state, setState] = useState({
    favArr: [],
    displayModal: false,
    currentPhoto: null,
  })

  const addToFavArr = (id) => {
    setState(prevState => ({
      ...prevState,
      favArr: [...prevState.favArr, id]
    }));
  };

  const removeFromFavArr = (id) => {
    setState(prevState => ({
      ...prevState,
      favArr: prevState.favArr.filter(favId => favId !== id)
    }));
  };

  const toggleFav = (id) => {
    if (state.favArr.includes(id)) {
      removeFromFavArr(id);
    } else {
      addToFavArr(id);
    }
  };

  const openModal = () => {
    setState(prevState => ({
      ...prevState,
      displayModal: true
    }));
  };

  const closeModal = () => {
    setState(prevState => ({
      ...prevState,
      displayModal: false
    }));
  };

  const selectPhotoId = (id) => {
    setState(prevState => ({
      ...prevState,
      currentPhoto: id
    }));
  };

  return {
    state,
    toggleFav,
    openModal,
    closeModal,
    selectPhotoId
  };
};

export default useApplicationData;