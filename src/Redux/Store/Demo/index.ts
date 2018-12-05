import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import { ApplicationState } from '..';

import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
//
// state
//
export interface State {
  count: number
};

const initialState: State = {
  count: 0,
};

//
// action
//
export const INCREMENT = 'INCREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const DECREASE = 'DECREASE'
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'

export const Actions = {
  increment: () => createAction(INCREMENT),
  increase_async: () => createAction(INCREMENT_ASYNC),
  decrease: () => createAction(DECREASE),
  incrementIfOdd: () => createAction(INCREMENT_IF_ODD),
}

export type Actions = ActionsUnion<typeof Actions>

//
// reducer
//
export const reducer = (
  state = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case INCREMENT: {
      // $ExpectType 'INCREMENT'

      return { count: state.count + 1 }
    }
    case DECREASE: {
      // $ExpectType 'DECREMENT'

      return { count: state.count - 1 }
    }
    default:
      return state
  }
}

//
// selectors
//

const countSelector = (state: ApplicationState) => state.Demo.count;

export const selectors = {
  count: countSelector,
};

//
// Async action handlers (Epics, Sagas, etc)
//

function* incrementAsync() {
  yield delay(100)
  console.log('haha')
  yield put(Actions.increment())

}

export function* saga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}
