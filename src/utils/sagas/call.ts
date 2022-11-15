import { call as rawCall } from 'redux-saga/effects';

import { CallEffect, SagaGenerator, SagaReturnType } from './models';

/**
 * @description Redux-saga call effect с поддержкой типизации возвращаемого значения
 * @example const response = yeild* sagaEffects.call(test)
 * @category ReduxSaga
 * @link https://redux-saga.js.org/
 */
export function call<Fn extends (...args: any[]) => any>(
	fn: Fn,
	...args: Parameters<Fn>
): SagaGenerator<SagaReturnType<Fn>, CallEffect<SagaReturnType<Fn>>>;
export function call<
	Ctx extends { [P in Name]: (this: Ctx, ...args: any[]) => any },
	Name extends string,
>(
	ctxAndFnName: [Ctx, Name],
	...args: Parameters<Ctx[Name]>
): SagaGenerator<SagaReturnType<Ctx[Name]>, CallEffect<SagaReturnType<Ctx[Name]>>>;
export function call<Ctx, Fn extends (this: Ctx, ...args: any[]) => any>(
	ctxAndFn: [Ctx, Fn],
	...args: Parameters<Fn>
): SagaGenerator<SagaReturnType<Fn>, CallEffect<SagaReturnType<Fn>>>;

export function* call<Args extends unknown[]>(fn: any, ...args: Args): Generator {
	return yield rawCall(fn, ...args);
}
