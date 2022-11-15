import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mainReducer } from "./mainReducer";

// eslint-disable-next-line import/no-cycle
import { rootWatcher } from "./rootSaga";

const rootReducer = combineReducers({
  mainReducer: mainReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);
