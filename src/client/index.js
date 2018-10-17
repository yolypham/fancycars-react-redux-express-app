import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const target = document.querySelector('#root')

const template = (
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
);

ReactDom.render(template, target);
