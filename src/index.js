import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

import App from './components/App/App';

const sagaMidleware = createSagaMiddleware();

const middlewareList =
  process.env.NODE_ENV === 'development'
    ? [sagaMidleware, logger]
    : [sagaMidleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
