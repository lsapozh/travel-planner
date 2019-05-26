import { DATA_LOAD_STARTED, TRIPS_LOADED } from "./constants";

export const INITIAL_STATE = {
  isLoading: true,
  trips: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOAD_STARTED:
      return { ...state, isLoading: true };
    case TRIPS_LOADED:
      return { ...state, isLoading: false, trips: action.trips };
    default:
      return state;
  }
};
