export interface IForecast {
  date: Date;
  temp: number;
}

export enum ForecastActionTypes {
  UPDATE_SEARCH = 'forecast/UPDATE_SEARCH',
  FETCH = 'forecast/FETCH',
  FETCH_SUCCESS = 'forecast/FETCH_SUCCESS',
  FETCH_FAIL = 'forecast/FETCH_FAIL',
}

export interface IForecastState {
  readonly search: string;
  readonly loading: boolean;
  readonly data: IForecast[];
}
