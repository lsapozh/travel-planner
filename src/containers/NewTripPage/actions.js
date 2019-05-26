import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  CLEAR,
  AUTOFOCUS
} from "./constants";
const uuidv1 = require("uuid/v1");

export const setAutoFocus = value => ({
  type: AUTOFOCUS,
  value
});

export const addCountry = () => ({
  type: ADD_ITEM,
  itemType: "countries",
  item: { id: uuidv1() }
});
export const deleteCountry = id => ({
  type: DELETE_ITEM,
  itemType: "countries",
  id
});
export const updateCountry = country => ({
  type: UPDATE_ITEM,
  itemType: "countries",
  item: country
});

export const addCity = countryId => ({
  type: ADD_ITEM,
  itemType: "cities",
  item: { id: uuidv1(), countryId }
});
export const deleteCity = id => ({
  type: DELETE_ITEM,
  itemType: "cities",
  id
});
export const updateCity = city => ({
  type: UPDATE_ITEM,
  itemType: "cities",
  item: city
});

export const addPlace = cityId => ({
  type: ADD_ITEM,
  itemType: "places",
  item: { id: uuidv1(), cityId }
});
export const deletePlace = id => ({
  type: DELETE_ITEM,
  itemType: "places",
  id
});
export const updatePlace = place => ({
  type: UPDATE_ITEM,
  itemType: "places",
  item: place
});

export const clearReduxState = () => ({
  type: CLEAR
});
