import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App/App';

import { HashRouter } from 'react-router-dom';

const dest = document.getElementById('app');

ReactDOM.render(
	(<HashRouter>
		<App />
	</HashRouter>),
	dest
);