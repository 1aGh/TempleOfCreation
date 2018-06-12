function isArrayOfFunctions (array) {
	return Array.isArray(array) && array.length > 0 && array.every(item => item instanceof Function);
}

export default function reduxCombineActions () {
	return ({dispatch, getState}) => {
		return next => action => {
//      console.log('COMBINE_ ACTION: ', action);

			if (!isArrayOfFunctions(action.payload)) {
				return next(action);
			}

			const { types, sequence } = action;
			const actions = action.payload;
			const [ PENDING, FULFILLED, REJECTED ] = types;
			let promise;

			next({
				type: PENDING,
			});

			if (sequence) {
				let func = (result, item) => {
//          console.log('COMBINEX: ',item, result);
					return result.then(
						(r) => {
//              console.log('RESULT: ',r);
							let ev = item(dispatch, getState);
//              console.log('COMBINE: ',ev);
								if (!ev){
									return Promise.reject(new Error('Event return empty response'));
								}
							return dispatch(ev);
						}
					);
				};
				promise = actions.reduce(func, Promise.resolve());
			} else {
				promise = Promise.all(actions.map(item => dispatch(item(dispatch, getState))));
			}

			promise.then(
				payload => next({
					payload,
					type: FULFILLED,
				}),
					(error) => {
						console.log('MIDDLEWARE ERROR: ', error);
						next({
							payload: error.message,
							stack: error.stack,
							error: true,
							type: REJECTED,
						});
					}
			);
//      console.log('COMBINE_END', promise);

			return promise;
		};
	};
}
