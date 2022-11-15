/** @internal */
import type { Task } from 'redux-saga';
import type { CallEffect, Effect, ForkEffect, StrictEffect } from 'redux-saga/effects';

export type SagaGenerator<RT, E extends Effect = Effect<any, any>> = Generator<E, RT>;

export type SagaIterator<RT = any> = Iterator<StrictEffect, RT, any>;

export type SagaReturnType<S extends (...args: any[]) => void> = S extends (
	...args: any[]
) => SagaIterator<infer RT>
	? RT
	: S extends (...args: any[]) => Promise<infer RT>
	? RT
	: S extends (...args: any[]) => infer RT
	? RT
	: never;

export interface IForkTask<T> extends Task {
	result: <T>() => T | undefined;
	toPromise: <T>() => Promise<T>;
}

export type { CallEffect, Effect, StrictEffect, ForkEffect };
