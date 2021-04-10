import { all } from 'redux-saga/effects';
import heroSaga from './heroSaga';
import graphSaga from './graphSaga';
import searchSaga from './searchSaga';
import superSaga from './superSaga';

export default function* rootSaga() {
  yield all([heroSaga(), graphSaga(), searchSaga(), superSaga()]);
}
