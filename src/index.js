import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App/App';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
	<App />,
	// <Router history={ browserHistory }>
	// 	<Route path='/' component={ App }/>
	// 		<IndexRoute component={ Home } />
	// 		<Route path='about' component={ About } />
	// 	</Route>
	// </Router>,
	document.getElementById('app')
);