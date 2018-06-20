import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import createStore from './redux/create';
import ApiClient from './redux/middleware/ApiClient';
import createHistory from 'history/createBrowserHistory';

import App from 'App/App';
import reducer from 'redux/reducer';

import { Router, browserHistory, hashHistory } from 'react-router';
import 'typeface-roboto-mono';
import 'typeface-ibm-plex-mono';

// const _browserHistory = hashHistory;
const _browserHistory = createHistory();
const client = new ApiClient();
const store = createStore(_browserHistory, client, window._data);
// const history = syncHistoryWithStore(_browserHistory, store);
const history = _browserHistory;
const dest = document.getElementById('app');

ReactDOM.render(
	(<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>),
	dest
);