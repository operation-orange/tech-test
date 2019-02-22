import { action } from 'typesafe-actions';
import { ForecastActionTypes, ILocation } from './types';

export const updateSearch = (value: string) => action(ForecastActionTypes.UPDATE_SEARCH, value);
export const fetch = () => action(ForecastActionTypes.FETCH);
export const fetchSuccess = (data: ILocation[]) => action(ForecastActionTypes.FETCH_SUCCESS, data);
export const fetchFail = (message: string) => action(ForecastActionTypes.FETCH_FAIL, message);
