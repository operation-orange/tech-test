import React, { Component } from 'react';

import { connectState, IStateProps } from './App.state';

export const App = ({ fetchAction }: IStateProps) => (
  <div>
    <button onClick={fetchAction}>Howdy world!</button>
  </div>
);

export default connectState(App);
