import React, { FormEvent } from 'react';

import { connectState, IStateProps } from './App.state';
import { updateSearch } from './state/forecast/actions';

const changeHandler = (action: typeof updateSearch) =>
  (e: FormEvent<HTMLInputElement>) => action(e.currentTarget.value);

export const App = ({ fetchAction, updateSearchAction }: IStateProps) => (
  <div>
    <input type="text" onChange={changeHandler(updateSearchAction)} />
    <button onClick={fetchAction}>Howdy world!</button>
  </div>
);

export default connectState(App);
