import { createAction } from "@reduxjs/toolkit";
import { UserLocationCoordsType, ToggleErrorHandlerType } from "./types";

export const setUserLocationCoords = createAction<UserLocationCoordsType>(
  "SET_USER_COORDS"
);

export const toggleErrorHandler = createAction<ToggleErrorHandlerType>(
  "TOGGLE_ERROR"
);

export const clearStore = createAction("CLEAR_STORE");
