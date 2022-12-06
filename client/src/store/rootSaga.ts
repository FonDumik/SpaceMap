import { sagaEffects } from "../utils";
import { mainWatcher } from "./mainReducer/mainSaga";

const { all, fork } = sagaEffects;

export function* rootWatcher() {
  yield all([fork(mainWatcher)]);
}
