import { useReducer } from 'react';

// Defines initial State
const initialState = {
  favArr: [],
  displayModal: false,
  currentPhoto: null,
};

// Define actions
export const ACTIONS = {
  TOGGLE_FAV: 'TOGGLE_FAV',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SELECT_PHOTO_ID: 'SELECT_PHOTO_ID',
};

// Define reducer function that handles each action
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV:
      return {
        ...state,
        favArr: state.favArr.includes(action.payload.id)
          ? state.favArr.filter(favId => favId !== action.payload.id)
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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  };
};

// Declaring functions that call useReducer alongside our reducer function
const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFav = (id) => {
    dispatch({type: ACTIONS.TOGGLE_FAV, payload: { id }});
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
    selectPhotoId
  };
};

export default useApplicationData;