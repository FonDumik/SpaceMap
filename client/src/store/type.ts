/* eslint-disable import/no-cycle */
import { AllEffect, ForkEffect } from "redux-saga/effects";

export type GeneratorSagaType<T = void | never> = Generator<
  AllEffect<ForkEffect<T>>,
  void,
  unknown
>;
