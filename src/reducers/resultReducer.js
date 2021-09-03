import { SET_RESULT, CLEAR_RESULTS } from "../actions/types";

const resultReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RESULT:
      return { ...state, result: action.payload };
    case CLEAR_RESULTS:
      return { ...state, result: null };
    default:
      return state;
  }
};

export default resultReducer;
