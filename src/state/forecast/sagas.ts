// tslint:disable-next-line:no-submodule-imports
import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api/client';
import { fetchFail, fetchSuccess } from './actions';
import { ForecastActionTypes } from './types';

function* fetchForecast() {
  try {
    const data = yield call(api.get);
    yield put(fetchSuccess(data));
  } catch (e) {
    yield put(fetchFail());
    // tslint:disable-next-line:no-console
    console.log(e);
    alert('An error has occured.');
  }
}

function* saga() {
  yield takeLatest(ForecastActionTypes.FETCH, fetchForecast);
}

export default saga;