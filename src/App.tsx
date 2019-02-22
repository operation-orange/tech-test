import React, { FormEvent } from 'react';

import { connectState, IStateProps } from './App.state';
import { updateSearch } from './state/forecast/actions';

const changeHandler = (action: typeof updateSearch) =>
  (e: FormEvent<HTMLInputElement>) => action(e.currentTarget.value);

export const App = ({ fetchAction, updateSearchAction, search, error }: IStateProps) => (
  <div>
    <input type="text" onChange={changeHandler(updateSearchAction)} value={search} ref={(el) => el && el.focus()} />
    <button onClick={fetchAction} disabled={!search}>Search</button>
    {error && <span className="error">{error}</span>}
  </div>
);

export default connectState(App);
