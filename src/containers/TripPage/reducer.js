import { DATA_LOAD_STARTED, TRIP_LOADED } from "./constants";

const INITIAL_STATE = {
  isLoading: true,
  trip: {},
  places: [],
  cities: [],
  countries: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case DATA_LOAD_STARTED:
    //   return { ...state, isLoading: true };
    // case TRIP_LOADED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     trip: action.trip,
    //     countries: action.countries,
    //     cities: action.cities,
    //     places: action.places
    //   };
    default:
      return state;
  }
};
