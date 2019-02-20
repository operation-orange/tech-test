import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IApplicationState, rootReducer } from './state/store';

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(
    rootReducer,
    composeWithDevTools(),
  );

  return store;
}
