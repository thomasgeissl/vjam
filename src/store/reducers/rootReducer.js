import { combineReducers } from "redux";

import system from "./system";
import band from "./band";

const appReducer = combineReducers({
  system,
  band,
});

export default (state, action) => {
  if (action.type === "RESET") {
    return appReducer(undefined, action);
  } else if (action.type === "SETSTATE") {
    return appReducer(action.payload, {
      type: "IGNORE",
    });
  } else {
    return appReducer(state, action);
  }
};
