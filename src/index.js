import React from 'react';
import {render} from "react-dom";
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';
import configureStore from './store/index';
import {APP_CONSTANT} from './constants/applicationConstants.json'

const store = configureStore();

import './themes/index.scss';

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}></Router>
    </Provider>,
    document.getElementById(APP_CONSTANT.APP)
);
