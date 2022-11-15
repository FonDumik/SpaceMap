import { createReducer } from "@reduxjs/toolkit";
import { MainReducerType } from "../../models/main/mainTypes";
import { setUserLocationCoords } from "./actions/actions";

const initialState: MainReducerType = {
  userGeolocation: {
    longitude: 0,
    latitude: 0,
  },
  defaultState: {
    center: [55.684758, 37.738521],
    zoom: 10,
  },
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserLocationCoords, (state, { payload }) => {
    return {
      ...state,
      userGeolocation: payload,
      defaultState: {
        ...state.defaultState,
        center: [payload.latitude, payload.longitude],
      },
    };
  });
});
