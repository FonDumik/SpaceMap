import { createAction } from "@reduxjs/toolkit";
import { UserLocationCoordsType } from "./types";

export const setUserLocationCoords = createAction<UserLocationCoordsType>(
  "SET_USER_COORDS"
);
