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
    isUserAuthorized?: boolean;
  };
  userData?: UserDataType;
};

export type UserGeolocationType = {
  longitude: number;
  latitude: number;
};

export type DefaultMapControlsType = "zoomControl" | "fullscreenControl";

export type UserRoleType = "Basic" | "Premium";

export type UserDataType = {
  name: string;
  nickname: string;
  userPhotoUrl: string;
  email: string;
  role: UserRoleType;
  residence: string;
  birthday: string;
};

export type ReverseGeocodeResponseType = {
  suggestions: {
    value: string;
    unrestricted_value: string;
    data: {
      postal_code: string; // 620030
      country: string; // Russia
      country_iso_code: string; // RU
      federal_district: string; // Уральский
      region_with_type: string; // "Свердловская обл"
      city_with_type: string; // "г Екатеринбург"
      city_type: string; // "г"
      city_type_full: string; // "город"
      city: string; // "Екатеринбург"
    };
  }[];
};
