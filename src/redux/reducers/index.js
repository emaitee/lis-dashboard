import { combineReducers } from "redux";
import director from "./directors";
import areaCharge from "./AreaCharge";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  director: director,
  areaCharge: areaCharge,
  form: formReducer,
});

export default rootReducer;
