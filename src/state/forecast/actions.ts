import { action } from 'typesafe-actions';
import { ForecastActionTypes, IForecast } from './types';

export const fetch = () => action(ForecastActionTypes.FETCH);
export const fetchSuccess = (data: IForecast[]) => action(ForecastActionTypes.FETCH_SUCCESS, data);
export const fetchFail = () => action(ForecastActionTypes.FETCH_FAIL);
