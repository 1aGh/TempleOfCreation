import update from 'immutability-helper';
import portfolioStore from 'portfolioStore';
import pudorysText from 'pudorysText';
import {network} from 'network';
import gapi from 'google-client-api';

function updateAppState (state, struct){
	let router = 'main';
	return update(state, {[router]: struct});
}

const auth = 'AIzaSyDdxc-DZdxxTKTzUlasS4qdOpKj_uUrzBA';

export const Actions = {
	'ADDIMAGES': 'toc/app/ADDIMAGES',
	'MESSAGEHANDLE': 'toc/app/MESSAGEHANDLE',

	'SENDEMAIL': 'toc/app/SENDEMAIL',
	'SENDEMAIL_SUCCESS': 'toc/app/SENDEMAIL_SUCCESS',
	'SENDEMAIL_FAIL': 'toc/app/SENDEMAIL_FAIL'
};

export const initialState = {
	main: {
		portfolio: portfolioStore,
		portfolioImg: {},
		pudorysText: pudorysText,
		network: network,
		draft: {},
	},
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case Actions.ADDIMAGES:
			return updateAppState(state, {portfolioImg: {$set: {[action.id]: action.value}}});
		case Actions.MESSAGEHANDLE:
			return updateAppState(state, {draft: {$merge: {[action.kind]: action.value}}});
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

export function messageHandle (type, value) {
	return {
		type: Actions.MESSAGEHANDLE,
		kind: type,
		value: value,
	};
}

export function sendEmail () {
	console.log('SEND');
		return {
			type: Actions.SENDEMAIL,
			promise: gapi().then(
				(g) => {
					g.client.init({
						'apiKey': auth,
						'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
					}).then((r) => {
						console.log('R:: ', r);
						// Executes an API request, and returns a Promise.
						// The method name `language.translations.list` comes from the API discovery.
						return g.client.language.translations.list({
							q: 'hello world',
							source: 'en',
							target: 'de',
						});
					}).then((response) => {
						console.log('TRANSLATE',response.result.data.translations[0].translatedText);
					}, (reason) => {
						console.log('Error: ' + reason);
					});
				}
			)
		};
}