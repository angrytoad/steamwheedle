import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store/store';


import history from './js/routing/history';

import './index.css';
import 'semantic-ui-css/semantic.css';
import './styles/animate.css';

import App from './js/core/App/container';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
