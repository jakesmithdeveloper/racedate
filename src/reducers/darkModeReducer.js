import { SET_DARKMODE } from "../actions/types";

const darkModeReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DARKMODE:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

export default darkModeReducer;
