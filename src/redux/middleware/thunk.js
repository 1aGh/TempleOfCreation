function createThunkMiddleware(extraArgument) {
	return ({ dispatch, getState }) => next => action => {
//console.log('THUNK: ',action);
		if (typeof action === 'function') {
			const act = action(dispatch, getState, extraArgument);
			if(act){
				return dispatch(act);
			}else{
				return;
			}
		}

		return next(action);
	};
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
