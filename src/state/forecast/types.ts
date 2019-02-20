export interface IForecast {
  id: number;
}

export enum ForecastActionTypes {
  FETCH = 'forecast/FETCH',
  FETCH_SUCCESS = 'forecast/FETCH_SUCCESS',
  FETCH_FAIL = 'forecast/FETCH_FAIL',
}

export interface IForecastState {
  readonly loading: boolean;
  readonly data: IForecast[];
}
