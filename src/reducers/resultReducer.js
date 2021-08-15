import { SET_RESULT } from "../actions/types";

const resultReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RESULT:
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

export default resultReducer;
