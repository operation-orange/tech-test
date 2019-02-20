import { connect } from 'react-redux';

import { App } from './App';
import { fetch } from './state/forecast/actions';
import { IForecast } from './state/forecast/types';
import { IApplicationState } from './state/store';

export interface IStateProps {
  data: IForecast[];
  loading: boolean;
  fetchAction: typeof fetch;
}

const mapStateToProps = ({ forecast }: IApplicationState) => ({
  data: forecast.data,
  loading: forecast.loading,
});

const mapDispatchToProps = {
  fetchAction: fetch,
};

export const connectState = (Component: typeof App) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
