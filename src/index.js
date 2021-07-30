import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//set up redex
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './redux/reducer/rootReducer';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
<Provider  store={store}>
    <App />
</Provider >
  ,document.getElementById('root')
);


