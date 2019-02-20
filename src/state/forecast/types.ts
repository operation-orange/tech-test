export interface IForecast {
  id: number;
}

export enum ForecastActionTypes {
  FETCH = 'forecast/FETCH',
  FETCH_SUCCESS = 'forecast/FETCH_SUCCESS',
}

export interface IForecastState {
  readonly loading: boolean;
  readonly data: IForecast[];
}
