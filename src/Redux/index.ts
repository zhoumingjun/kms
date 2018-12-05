import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, ApplicationState, rootSaga } from './Store'
import createSagaMiddleware from 'redux-saga'



export function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware()


  const store = createStore(
    rootReducer,
    initialState || {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)
    ),
  );

  sagaMiddleware.run(rootSaga)

  return store
}

