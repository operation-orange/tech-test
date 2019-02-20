import { combineReducers } from 'redux';

import { reducer as forecastReducer } from './forecast/reducer';
import { IForecastState } from './forecast/types';

export interface IApplicationState {
  forecast: IForecastState;
}

export const rootReducer = combineReducers<IApplicationState>({
  forecast: forecastReducer,
});
