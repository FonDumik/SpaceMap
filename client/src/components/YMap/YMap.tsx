import React, { useEffect } from "react";
import { YMaps, Map, Placemark, ObjectManager } from "@pbe/react-yandex-maps";
import { useSelector, useDispatch } from "react-redux";
import { mainStateSelector } from "../../selectors";
import {
  clearStore,
  getLocationWithCoords,
  setUserLocationCoords,
  toggleErrorHandler,
} from "../../store/mainReducer/actions/actions";
import { Loading } from "../Loading";
import { useDefaultStyles } from "../../models/main/styles";

interface IProps {}
export const YMap: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const mainState = useSelector(mainStateSelector);
  const classes = useDefaultStyles();

  const [aItem, setAitem] = React.useState([
    {
      id: "1",
      coordinates: [56.7925551, 60.6094379157],
      title:
        "Торговый центр 'Радость', второй этаж, примерочная магизина 'Симпатия'",
    },
    {
      id: "2",
      coordinates: [56.7925551, 60.50973479],
      title: "Антикафе 'Модильяне', бесплатный проход в уборную",
    },
    {
      id: "3",
      coordinates: [56.7925551, 60.70913244],
      title: "(Открытая зона) Парк Маяковского",
    },
  ]);

  const collection = {
    type: "FeatureCollection",
    features: aItem.map((point, id) => {
      return {
        id: id,
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: point.coordinates,
        },
        properties: {
          balloonContent: `
          <div>${point.title}</div>
        `,
          clusterCaption: `Метка №${id + 1}`,
        },
      };
    }),
  };
  return (
    <YMaps
      query={{ lang: "ru_RU", apikey: process.env.APP_REACT_YMAPS_API_KEY }}>
      <Map
        defaultState={mainState.defaultState}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        className={classes.defaultSize}>
        <Placemark
          defaultGeometry={mainState.defaultState.center}
          geometry={mainState.defaultState.center}
          options={{ preset: "islands#redCircleDotIcon" }}
        />
        <ObjectManager
          objects={{
            openBalloonOnClick: true,
          }}
          clusters={{}}
          options={{
            clusterize: true,
            gridSize: 32,
          }}
          defaultFeatures={collection}
          modules={[
            "objectManager.addon.objectsBalloon",
            "objectManager.addon.clustersBalloon",
          ]}
        />
      </Map>
    </YMaps>
  );
};
