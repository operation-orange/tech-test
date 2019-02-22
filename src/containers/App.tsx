import React, { FormEvent } from 'react';

import ForecastList from '../components/ForecastList';
import { updateSearch } from '../state/forecast/actions';
import { connectState, IStateProps } from './App.state';

const changeHandler = (action: typeof updateSearch) =>
  (e: FormEvent<HTMLInputElement>) => action(e.currentTarget.value);

const focusField = (el: HTMLInputElement) => el && el.focus();

export const App = ({
  fetchAction,
  updateSearchAction,
  search,
  error,
  data,
  loading,
}: IStateProps) => (
  <div>
    <input
      type="text"
      onChange={changeHandler(updateSearchAction)}
      value={search}
      ref={focusField}
    />
    <button onClick={fetchAction} disabled={!search || loading}>
      {loading ? 'Loading...' : 'Search'}
    </button>
    {error && <span className="error">{error}</span>}
    <ForecastList data={data} />
  </div>
);

export default connectState(App);
