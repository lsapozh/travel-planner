import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import homePage from "../containers/HomePage/reducer";
import tripPage from "../containers/NewTripPage/reducer";

const reducers = combineReducers({
  router: routerReducer,
  homePage,
  tripPage
});

export default reducers;
