// import { reducer as notifReducer, actions as notifActions, Notifs } from 'redux-notifications';
// const { notifSend } = notifActions;

export default function clientMiddleware (client) {
	return ({dispatch, getState}) => {
		return next => action => {
//console.log('CLIENT: ',action);
			if (!action || (action && !action.promise)) {
				return next(action);
			}

			const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
			if (!promise) {
				return next(action);
			}

			const [REQUEST, SUCCESS, FAILURE] = types;
			next({type: 'api/client/HTTPACTION', actiontype: 'begin', url: action.url});
			next({...rest, type: REQUEST});
			const actionPromise = promise(client);
			actionPromise.then(
				(result) => {
//          console.log('RESULT: ', result);
					if (result && result.login === 'failed') {
						next({type: 'api/client/HTTPACTION', actiontype: 'error', url: action.url});
						// next(notifSend({
						//   message: 'Wrong username or password.',
						//   kind: 'danger',
						//   dismissAfter: 8000
						// }));
						next({...rest, result, type: FAILURE});
					} else {
						next({type: 'api/client/HTTPACTION', actiontype: 'success', url: action.url});
						next({...rest, result, type: SUCCESS});
					}
				},
				(error) => {
					next({type: 'api/client/HTTPACTION', actiontype: 'error', message: error, url: action.url});
					if (error.status !== 401){
						// console.log(error);
						let errormessage = '';
						if(typeof error === 'object'){
							errormessage = JSON.stringify(error);
						}else{
							errormessage = error;
						}
						// dispatch(notifSend({
						//
						// 	message: '' + errormessage,
						// 	kind: 'danger',
						// //   dismissAfter: 8000
						// }));
					}else{
						next({type: 'middleware/client/HTTP_AUTH_ERROR', error: error, url: action.url});
					}

					next({...rest, error, type: FAILURE});
				}
			).catch((error) => {
				next({type: 'api/client/HTTPACTION', actiontype: 'error', message: error, url: action.url});
				// dispatch(notifSend({
				// 	message: 'Error: '+error,
				// 	kind: 'danger',
				// //   dismissAfter: 8000
				// }));

				next({...rest, error, type: FAILURE});
			});

//      console.log('CLIENT_END', actionPromise);

			return actionPromise;
		};
	};
}
