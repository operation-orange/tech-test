export interface IForecast {
  date: number;
  temp: number;
}

export interface ILocation {
  name: string;
  forecastList: IForecast[];
}

export enum ForecastActionTypes {
  UPDATE_SEARCH = 'forecast/UPDATE_SEARCH',
  FETCH = 'forecast/FETCH',
  FETCH_SUCCESS = 'forecast/FETCH_SUCCESS',
  FETCH_FAIL = 'forecast/FETCH_FAIL',
}

export interface IForecastState {
  readonly error: string;
  readonly search: string;
  readonly loading: boolean;
  readonly data: ILocation[];
}
