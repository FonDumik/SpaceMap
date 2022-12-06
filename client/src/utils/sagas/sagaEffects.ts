import {
	all,
	cancel,
	cancelled,
	debounce,
	delay,
	flush,
	fork,
	put,
	race,
	retry,
	setContext,
	spawn,
	take,
	takeEvery,
	takeLatest,
	takeLeading,
	takeMaybe,
	throttle,
} from 'redux-saga/effects';

import { call } from './call';
import { select } from './select';

/**
 * @description Redux-saga effects
 * @example sagaEffects.call, sagaEffects.select (change tsconfig.ts -> target -> high than ES5)
 * @category reduxSaga
 * @link https://redux-saga.js.org/
 */
export const sagaEffects = {
	call,
	take,
	takeEvery,
	takeLatest,
	takeLeading,
	all,
	put,
	select,
	throttle,
	debounce,
	delay,
	retry,
	cancelled,
	cancel,
	race,
	setContext,
	spawn,
	flush,
	takeMaybe,
	fork,
};

export type { SelectEffect } from 'redux-saga/effects';
