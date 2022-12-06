import {
  ReverseGeocodeResponseType,
  UserGeolocationType,
} from "$models/main/mainTypes";

const token = process.env.APP_REACT_DATATA_TOKEN;

export const ReverseGeocodeAPI = {
  getLocation({
    longitude,
    latitude,
  }: UserGeolocationType): Promise<ReverseGeocodeResponseType> {
    return fetch(
      `https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
        body: JSON.stringify({
          lat: latitude,
          lon: longitude,
          radius_meters: 10,
        }),
      }
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  },
};
