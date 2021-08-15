import { SET_MODE } from "../actions/types";

const initialState = {
  label: "Training Block Length",
  type: "text",
  key: "block",
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default modeReducer;
