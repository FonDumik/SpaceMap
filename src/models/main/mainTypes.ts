export type MainReducerType = {
  userGeolocation: UserGeolocationType;
  defaultState: {
    center: number[];
    zoom: number;
  };
};

export type UserGeolocationType = {
  longitude: number;
  latitude: number;
};
