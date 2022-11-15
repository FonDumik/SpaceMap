import React, { useCallback, useEffect, useRef } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useSelector, useDispatch } from "react-redux";
import { mainStateSelector } from "../../selectors";
import { setUserLocationCoords } from "../../store/mainReducer/actions/actions";

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
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    }
  }, [mainState.userGeolocation]);

  return (
    <YMaps>
      <Map defaultState={mainState.defaultState} width='100vw' height='100vh'>
        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={[55.75, 37.57]}
          properties={{
            balloonContentBody:
              "This is balloon loaded by the Yandex.Maps API module system",
          }}
          geometry={mainState.defaultState.center}
        />
      </Map>
    </YMaps>
  );
};
