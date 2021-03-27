import { all } from 'redux-saga/effects';
import heroSaga from './superSaga';

export default function* rootSaga() {
  yield all([heroSaga()]);
}
