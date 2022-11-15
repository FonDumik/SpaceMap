import { sagaEffects } from "../../utils";
const { call, select, put, takeEvery } = sagaEffects;

function* startWorker() {
  try {
  } catch (error) {}
}

export function* mainWatcher() {
  // yield takeEvery(getStartMain, startWorker);
}
