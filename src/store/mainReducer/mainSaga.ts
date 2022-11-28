import {
  MainReducerType,
  ReverseGeocodeResponseType,
} from "../../models/main/mainTypes";
import { mainStateSelector } from "../../selectors";
import { sagaEffects } from "../../utils";
import { ReverseGeocodeAPI } from "../../utils/API";
import { getLocationWithCoords, setUserAddress } from "./actions/actions";
const { call, select, put, takeEvery } = sagaEffects;

function* getLocationWorker() {
  try {
    const state = yield* select(mainStateSelector);

    const address: ReverseGeocodeResponseType =
      yield ReverseGeocodeAPI.getLocation({
        longitude: state.userGeolocation.longitude,
        latitude: state.userGeolocation.latitude,
      });

    yield put(setUserAddress(address.suggestions[0].data.city));
  } catch (error) {}
}

export function* mainWatcher() {
  yield takeEvery(getLocationWithCoords, getLocationWorker);
}
