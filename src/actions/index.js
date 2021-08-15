import { SET_MODE, SET_RESULT } from "./types";

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
