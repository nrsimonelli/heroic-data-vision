import { all } from 'redux-saga/effects';
import heroSaga from './heroSaga';
import graphSaga from './graphSaga';

export default function* rootSaga() {
  yield all([heroSaga(), graphSaga()]);
}
