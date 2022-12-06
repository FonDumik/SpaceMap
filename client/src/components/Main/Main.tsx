import { AppNavigation } from "../AppNavigation";
import { Loading } from "../Loading";
import { mainStateSelector } from "$selectors";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLocationCoords,
  getLocationWithCoords,
  toggleErrorHandler,
} from "$store/mainReducer/actions/actions";

export const Main: FC = () => {
  const mainState = useSelector(mainStateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          dispatch(
            setUserLocationCoords({
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
            })
          );
          dispatch(getLocationWithCoords());
        },
        function (error) {
          dispatch(
            toggleErrorHandler({
              message:
                "Не удалось загрузить карту. Проверьте настройки интернет соединения и геолокации",
              isGeoAllowed: false,
            })
          );
        }
      );
    }
  }, []);

  return mainState.defaultState.center.length !== 0 ? (
    <AppNavigation />
  ) : (
    <Loading />
  );
};
