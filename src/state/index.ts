import { combineReducers } from 'redux';
// tslint:disable-next-line:no-submodule-imports
import { all, fork } from 'redux-saga/effects';

import { reducer as forecastReducer } from './forecast/reducer';
import forecastSaga from './forecast/sagas';
import { IForecastState } from './forecast/types';

export interface IApplicationState {
  forecast: IForecastState;
}

export const rootReducer = combineReducers<IApplicationState>({
  forecast: forecastReducer,
});

export function* rootSaga() {
  yield all([
    fork(forecastSaga),
  ]);
}
