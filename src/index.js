import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './redux/create';
import ApiClient from './redux/middleware/ApiClient';

import App from 'App/App';
import reducer from 'redux/reducer';

import { Router, browserHistory, hashHistory } from 'react-router';
import 'typeface-roboto-mono';
import 'typeface-ibm-plex-mono';

const _browserHistory = hashHistory;
const client = new ApiClient();
const store = createStore(_browserHistory, client, window._data);
const history = syncHistoryWithStore(_browserHistory, store);
const dest = document.getElementById('app');

ReactDOM.render(
	(<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>),
	dest
);