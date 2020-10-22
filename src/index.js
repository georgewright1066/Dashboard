import './styles/css/main.css';
import App from './scripts/App';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './scripts/store/store';
import { AUTHENTICATED, UNAUTHENTICATED } from './scripts/actions/actions';
import "@babel/polyfill";
// eslint-disable-next-line
import ROLLBAR from "./scripts/Rollbar/Rollbar";

console.log(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`)

const user = localStorage.getItem('user');

if (user) {
  store.dispatch({ type: AUTHENTICATED });
} else {
  store.dispatch({ type: UNAUTHENTICATED });
}

window.store = store;

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
