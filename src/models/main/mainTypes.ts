export type MainReducerType = {
  userGeolocation: UserGeolocationType;
  defaultState: {
    center: number[];
    zoom: number;
    controls?: DefaultMapControlsType[];
  };
  additional: {
    message: string;
    isGeoAllowed?: boolean;
  };
};

export type UserGeolocationType = {
  longitude: number;
  latitude: number;
};

export type DefaultMapControlsType = "zoomControl" | "fullscreenControl";
