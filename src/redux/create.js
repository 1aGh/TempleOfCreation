import { createStore as _createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './combine';
import ReduxThunk from './middleware/thunk';
import combineActionsMiddleware from './middleware/combineActionsMiddleware';
import createMiddleware from './middleware/clientMiddleware';
import { routerMiddleware } from 'react-router-redux';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
	console.log(action.type, action);
	let result = next(action);
//  console.log(store.getState());
	return result;
};

export default function createStore (history, client, data) {
	// Sync dispatched route actions to the history
	const reduxRouterMiddleware = routerMiddleware(history);

	const middleware = [ReduxThunk, combineActionsMiddleware(), createMiddleware(client), reduxRouterMiddleware, logger];

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	let finalCreateStore = composeEnhancers(
			applyMiddleware(...middleware)
	)(_createStore);

	const store = finalCreateStore(rootReducer, data);
	// sagaMiddleware.run(rootSaga);

//  if (window.devToolsExtension) window.devToolsExtension.updateStore(store);

	if (module.hot) {
		module.hot.accept('./combine', () => {
			const nextReducer = require('./combine').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}