import update from 'immutability-helper';
import portfolioStore from 'portfolioStore';

function updateAppState (state, struct){
	let router = 'main';
	return update(state, {[router]: struct});
}

export const Actions = {
	'TEST': 'toc/app/TEST',
};

export const initialState = {
	main: {
		portfolio: portfolioStore,
	},
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case Actions.TEST:
		console.log('action', action);
			return updateAppState(state, {test: {$set: action.value}});
		default:
			return state;
	}
}

export function test (value) {
	return {
		type: Actions.TEST,
		value: value,
	};
}