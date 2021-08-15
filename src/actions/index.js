import { SET_MODE, SET_RESULT, CLEAR_INPUTS } from "./types";

export const setMode = (mode) => {
  return {
    type: SET_MODE,
    payload: mode,
  };
};

export const setResult = (result) => {
  return {
    type: SET_RESULT,
    payload: result,
  };
};

export const clearInputs = () => {
  return {
    type: CLEAR_INPUTS,
  };
};
