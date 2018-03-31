import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from 'App/App';
import reducer from 'redux/reducer';

import { HashRouter } from 'react-router-dom';

const dest = document.getElementById('app');
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	(<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>),
	dest
);