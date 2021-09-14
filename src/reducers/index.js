import { combineReducers } from "redux";

import darkModeReducer from "./darkModeReducer";
import modeReducer from "./modeReducer";
import resultReducer from "./resultReducer";

export default combineReducers({
  mode: modeReducer,
  result: resultReducer,
  darkMode: darkModeReducer,
});
