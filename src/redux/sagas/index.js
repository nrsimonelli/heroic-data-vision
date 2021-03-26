import { all } from 'redux-saga/effects';
import superSaga from './superSaga';

export default function* rootSaga() {
  yield all([superSaga()]);
}
