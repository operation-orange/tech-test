import { connect } from 'react-redux';

import { App } from './App';
import { IApplicationState } from './state';
import { fetch, updateSearch } from './state/forecast/actions';
import { IForecast } from './state/forecast/types';

export interface IStateProps {
  data: IForecast[];
  loading: boolean;
  updateSearchAction: typeof updateSearch;
  fetchAction: typeof fetch;
}

const mapStateToProps = ({ forecast }: IApplicationState) => ({
  data: forecast.data,
  loading: forecast.loading,
});

const mapDispatchToProps = {
  fetchAction: fetch,
  updateSearchAction: updateSearch,
};

export const connectState = (Component: typeof App) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
