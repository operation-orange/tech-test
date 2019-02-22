// tslint:disable-next-line:no-submodule-imports
import { call, put, select, takeLatest } from 'redux-saga/effects';

import api from '../../api/client';
import { fetchFail, fetchSuccess } from './actions';
import { ForecastActionTypes } from './types';

function* fetchForecast() {
  try {
    const search = yield select((state) => state.forecast.search);
    const data = yield call(api.getForecast, search);
    yield put(fetchSuccess(data));
  } catch (e) {
    if (e.response.status === 404) {
      yield put(fetchFail('Location not found'));
    } else {
      yield put(fetchFail('Unknown error'));
    }
  }
}

function* saga() {
  yield takeLatest(ForecastActionTypes.FETCH, fetchForecast);
}

export default saga;
