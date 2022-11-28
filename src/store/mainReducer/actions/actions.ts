import { createAction } from "@reduxjs/toolkit";
import { UserLocationCoordsType, ToggleErrorHandlerType } from "./types";

export const setUserLocationCoords =
  createAction<UserLocationCoordsType>("SET_USER_COORDS");

// saga actions
export const getLocationWithCoords = createAction("GET_LOCATION_WITH_COORDS");
export const setUserAddress = createAction<string>("SET_USER_ADDRESS");

export const toggleErrorHandler =
  createAction<ToggleErrorHandlerType>("TOGGLE_ERROR");
export const clearStore = createAction("CLEAR_STORE");
