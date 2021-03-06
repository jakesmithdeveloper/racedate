import { SET_MODE, SET_RESULT, CLEAR_RESULTS, SET_DARKMODE } from "./types";

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

export const clearResults = () => {
  return {
    type: CLEAR_RESULTS,
  };
};

export const setDarkMode = (mode) => {
  return {
    type: SET_DARKMODE,
    payload: mode,
  };
};
