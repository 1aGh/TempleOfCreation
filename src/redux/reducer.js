import update from 'immutability-helper';
import portfolioStore from 'portfolioStore';

function updateAppState (state, struct){
	let router = 'main';
	return update(state, {[router]: struct});
}

export const Actions = {
	'ADDIMAGES': 'toc/app/ADDIMAGES',
};

export const initialState = {
	main: {
		portfolio: portfolioStore,
		portfolioImg: {},
	},
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case Actions.ADDIMAGES:
			return updateAppState(state, {portfolioImg: {$set: {[action.id]: action.value}}});
		default:
			return state;
	}
}

export function addImages (id, images) {
	return {
		type: Actions.ADDIMAGES,
		value: images,
		id: id,
	};
}