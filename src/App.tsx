import React, { FormEvent } from 'react';

import { connectState, IStateProps } from './App.state';
import { updateSearch } from './state/forecast/actions';

const changeHandler = (action: typeof updateSearch) =>
  (e: FormEvent<HTMLInputElement>) => action(e.currentTarget.value);

export const App = ({ fetchAction, updateSearchAction, search }: IStateProps) => (
  <div>
    <input type="text" onChange={changeHandler(updateSearchAction)} value={search} />
    <button onClick={fetchAction} disabled={!search}>Search</button>
  </div>
);

export default connectState(App);
