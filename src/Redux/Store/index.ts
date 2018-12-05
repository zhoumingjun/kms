import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'


import * as Demo from './Demo';

export interface ApplicationState {
  readonly Demo: Demo.State;
}

export const actions = {
  Demo: Demo.Actions,
};

export const selectors = {
  Demo: Demo.selectors,
};

export const rootReducer = combineReducers({
  Demo: Demo.reducer
});

export function* rootSaga() {
  yield all([
    Demo.saga()
  ])
}
