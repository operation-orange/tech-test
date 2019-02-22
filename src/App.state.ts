import { connect } from 'react-redux';

import { App } from './App';
import { IApplicationState } from './state';
import { fetch, updateSearch } from './state/forecast/actions';
import { IForecast } from './state/forecast/types';

export interface IStateProps {
  data: IForecast[];
  error: string;
  loading: boolean;
  search: string;
  updateSearchAction: typeof updateSearch;
  fetchAction: typeof fetch;
}

const mapStateToProps = ({ forecast }: IApplicationState) => ({
  data: forecast.data,
  error: forecast.error,
  loading: forecast.loading,
  search: forecast.search,
});

const mapDispatchToProps = {
  fetchAction: fetch,
  updateSearchAction: updateSearch,
};

export const connectState = (Component: typeof App) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
