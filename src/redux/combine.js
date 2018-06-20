import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducer as notifReducer } from 'redux-notifications';

import reducer from './reducer';

export default combineReducers({
	routing: routerReducer,
	// notifs: notifReducer,
	main: reducer,
});
