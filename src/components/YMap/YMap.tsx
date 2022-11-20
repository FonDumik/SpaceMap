import React, { useCallback, useEffect, useRef } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useSelector, useDispatch } from "react-redux";
import { mainStateSelector } from "../../selectors";
import {
  clearStore,
  setUserLocationCoords,
  toggleErrorHandler,
} from "../../store/mainReducer/actions/actions";
import { Typography } from "@mui/material";
import { Loading } from "../Loading";

interface IProps {}
export const YMap: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const mainState = useSelector(mainStateSelector);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          dispatch(
            setUserLocationCoords({
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
            })
          );
        },
        function(error) {
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

    return () => {
      dispatch(clearStore());
    };
  }, [dispatch]);

  return (
    <YMaps query={{ lang: "ru_RU" }}>
      {mainState.defaultState.center.length !== 0 ? (
        <Map
          defaultState={mainState.defaultState}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          style={{ width: "calc(100vw - 64px)", height: "calc(100vh - 64px)" }}>
          <Placemark
            defaultGeometry={mainState.defaultState.center}
            geometry={mainState.defaultState.center}
            options={{ preset: "islands#redCircleDotIcon" }}
          />
        </Map>
      ) : (
        <Loading />
      )}
    </YMaps>
  );
};
