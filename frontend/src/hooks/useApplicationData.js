import { useReducer, useEffect } from "react";

// Defines initial State
const initialState = {
  favArr: [],
  displayModal: false,
  currentPhoto: null,
  photoData: [],
  topicData: [],
  loadingState: true,
  darkToggle: false,
};

// Define actions
export const ACTIONS = {
  TOGGLE_FAV: "TOGGLE_FAV",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SELECT_PHOTO_ID: "SELECT_PHOTO_ID",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_LOADING_STATE: "SET_LOADING_STATE",
  TOGGLE_DARK: "TOGGLE_DARK",
};

// Define reducer function that handles each action
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV:
      return {
        ...state,
        favArr: state.favArr.includes(action.payload.id)
          ? state.favArr.filter((favId) => favId !== action.payload.id)
          : [...state.favArr, action.payload.id],
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        displayModal: true,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        displayModal: false,
      };
    case ACTIONS.SELECT_PHOTO_ID:
      return {
        ...state,
        currentPhoto: action.payload.id,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.SET_LOADING_STATE:
      return {
        ...state,
        loadingState: action.payload,
      };
    case ACTIONS.TOGGLE_DARK:
      return {
        ...state,
        darkToggle: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Declaring functions that call dispatch alongside our reducer function
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        dispatch({ type: ACTIONS.SET_LOADING_STATE, payload: false });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
        dispatch({ type: ACTIONS.SET_LOADING_STATE, payload: false });
      })
      .catch((err) => console.log(err));
  }, []);

  const getPhotosByTopic = (topicId) => {
    let url;
    topicId
      ? (url = `http://localhost:8001/api/topics/photos/${topicId}`)
      : (url = `http://localhost:8001/api/photos`);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        dispatch({ type: ACTIONS.SET_LOADING_STATE, payload: false });
      })
      .catch((err) => console.log("Error fetching Photos by Topic:", err));
  };

  const toggleFav = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV, payload: { id } });
  };

  const toggleDark = () => {
    dispatch({ type: ACTIONS.TOGGLE_DARK, payload: !state.darkToggle });
  };

  const openModal = () => {
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const selectPhotoId = (id) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO_ID, payload: { id } });
  };

  // returns an object with our functions and state
  return {
    state,
    toggleFav,
    openModal,
    closeModal,
    selectPhotoId,
    getPhotosByTopic,
    toggleDark,
  };
};

export default useApplicationData;
