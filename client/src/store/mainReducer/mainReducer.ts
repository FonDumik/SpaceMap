import { createReducer } from "@reduxjs/toolkit";
import { MainReducerType } from "../../models/main/mainTypes";
import {
  clearStore,
  setUserAddress,
  setUserLocationCoords,
  toggleErrorHandler,
} from "./actions/actions";

const initialState: MainReducerType = {
  userGeolocation: {
    longitude: 0,
    latitude: 0,
  },
  defaultState: {
    center: [],
    zoom: 17,
    controls: ["zoomControl", "fullscreenControl"],
  },
  additional: {
    message: "",
    isGeoAllowed: true,
    isUserAuthorized: true, //fix with authorization logic
  },
  userData: {
    name: "Oleg Dumler",
    nickname: "@fondumik",
    userPhotoUrl:
      "https://lh3.googleusercontent.com/a/ALm5wu2ANJfLumU-z1sHwhjOrFM-vy0T9PaSQDLBRM-tkA=s576-p-rw-no",
    email: "fondumik@vk.com",
    birthday: "1998.21.10",
    role: "Premium",
    residence: "Russia",
  },
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserLocationCoords, (state, { payload }) => {
      return {
        ...state,
        userGeolocation: payload,
        defaultState: {
          ...state.defaultState,
          center: [payload.latitude, payload.longitude],
        },
      };
    })
    .addCase(toggleErrorHandler, (state, { payload }) => {
      return {
        ...state,
        additional: {
          ...state.additional,
          message: payload.message,
          isGeoAllowed: payload.isGeoAllowed,
        },
      };
    })
    .addCase(setUserAddress, (state, { payload }) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          residence: payload,
        },
      };
    })
    .addCase(clearStore, () => {
      return {
        ...initialState,
      };
    });
});
