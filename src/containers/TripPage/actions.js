import { DATA_LOAD_STARTED, TRIP_LOADED } from "./constants";
import { loadTrip } from "../../api";

export const asyncLoadData = value => dispatch => {
  dispatch(dataLoadStarted());
  loadTrip(value).then(({ trip, data }) => {
    dispatch(dataLoaded({ trip, data }));
  });
  // return  Promise.resolve();
};

export const dataLoadStarted = () => ({
  type: DATA_LOAD_STARTED
});

export const dataLoaded = ({ trip, data }) => ({
  type: TRIP_LOADED,
  countries: data.countries,
  cities: data.cities,
  places: data.places,
  trip
});
