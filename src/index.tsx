import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { EnthusiasmAction } from './actions/index';
import Hello from './containers/Hello';
import './index.css';
import { enthusiasm } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { StoreState } from './types/index';

// const store = createStore<StoreState>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });
const store = createStore <StoreState,EnthusiasmAction,any,any>(enthusiasm,{
enthusiasmLevel:1,
languageName:'TypeScript'
});
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
