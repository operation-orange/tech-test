import { connect } from 'react-redux';

import { IApplicationState } from '../state';
import { fetch, updateSearch } from '../state/forecast/actions';
import { ILocation } from '../state/forecast/types';
import { App } from './App';

export interface IStateProps {
  data: ILocation[];
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
