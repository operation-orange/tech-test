import { Reducer } from 'redux';

import { ForecastActionTypes, IForecastState } from './types';

// Type-safe initialState!
export const initialState: IForecastState = {
  data: [],
  loading: false,
};

export const reducer: Reducer<IForecastState> = (state = initialState, action) => {
  switch (action.type) {
    case ForecastActionTypes.FETCH:
      return { ...state, loading: true };

    case ForecastActionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    default:
      return state;
  }
};
