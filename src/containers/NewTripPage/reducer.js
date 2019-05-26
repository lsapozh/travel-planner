import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  CLEAR,
  AUTOFOCUS
} from "./constants";
import { DATA_LOAD_STARTED, TRIP_LOADED } from "../TripPage/constants";

const INITIAL_STATE = {
  trip: {},
  places: [],
  cities: [],
  countries: [],
  autofocus: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType], action.item]
      };

    case DELETE_ITEM:
      return {
        ...state,
        [action.itemType]: state[action.itemType].filter(
          item => item.id !== action.id
        )
      };

    case UPDATE_ITEM:
      const newItems = state[action.itemType].map(item => {
        if (item.id === action.item.id) {
          return action.item;
        } else {
          return item;
        }
      });
      return { ...state, [action.itemType]: newItems };

    case CLEAR:
      return INITIAL_STATE;
    case AUTOFOCUS:
      return { ...state, autofocus: action.value };

    case DATA_LOAD_STARTED:
      return { ...state, isLoading: true };

    case TRIP_LOADED:
      return {
        ...state,
        isLoading: false,
        trip: action.trip,
        countries: action.countries,
        cities: action.cities,
        places: action.places
      };
    default:
      return state;
  }
};
