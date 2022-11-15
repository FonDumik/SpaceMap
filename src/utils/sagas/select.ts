import { select as sagaSelect } from 'redux-saga/effects';

/**
 * @description Обвязка над select для type-safe return from selector
 * @example const partOfState = yield* sagaEffects.select(selector, args) // (change tsconfig.ts -> target -> high than ES5)
 * @category reduxSaga
 * @link https://redux-saga.js.org/docs/advanced/SequencingSagas.html
 *
 */
export function* select<S, T, Args extends unknown[] = unknown[]>(
	fn: (state: S, ...args: Args) => T,
	...args: Args
) {
	const res: T = yield sagaSelect(fn, ...args);

	return res;
}
