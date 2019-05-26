import { DATA_LOAD_STARTED, TRIPS_LOADED, CLEAR } from "./constants";
import { loadTrips } from "../../api";

export const asyncLoadData = value => dispatch => {
  dispatch(dataLoadStarted());
  loadTrips(value).then(trips => {
    dispatch(dataLoaded({ trips }));
  });
};

export const dataLoadStarted = () => ({
  type: DATA_LOAD_STARTED
});

export const dataLoaded = ({ trips }) => ({
  type: TRIPS_LOADED,
  trips
});
