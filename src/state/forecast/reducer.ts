import { Reducer } from 'redux';

import { ForecastActionTypes, IForecastState } from './types';

export const initialState: IForecastState = {
  data: [],
  error: '',
  loading: false,
  search: 'manchester',
};

export const reducer: Reducer<IForecastState> = (state = initialState, action) => {
  switch (action.type) {
    case ForecastActionTypes.UPDATE_SEARCH:
      return { ...state, search: action.payload };

    case ForecastActionTypes.FETCH:
      return { ...state, loading: true, error: '' };

    case ForecastActionTypes.FETCH_SUCCESS:
      const newData = [action.payload, ...state.data.filter((item) => item.name !== action.payload.name)];
      return { ...state, loading: false, data: newData };

    case ForecastActionTypes.FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
