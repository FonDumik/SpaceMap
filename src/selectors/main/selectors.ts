import { createSelector } from "@reduxjs/toolkit";
import { AppStateType } from "../../store/store";

export const mainStateSelector = createSelector(
  (state: AppStateType) => state.mainReducer,
  (mainReducer) => mainReducer
);
