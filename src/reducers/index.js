import { combineReducers } from "redux";

import modeReducer from "./modeReducer";
import resultReducer from "./resultReducer";

export default combineReducers({
  mode: modeReducer,
  result: resultReducer,
});
