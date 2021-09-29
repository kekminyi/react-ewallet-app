import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import wallet from "./wallet";

const rootReducer = combineReducers({
  auth,
  message,
  wallet,
});

export default rootReducer;
