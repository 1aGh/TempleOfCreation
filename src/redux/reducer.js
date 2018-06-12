import update from 'immutability-helper';
import portfolioStore from 'portfolioStore';
import pudorysText from 'pudorysText';
import {network} from 'network';
import gapi from 'google-client-api';
import Email from '../../store/smtp.js';

function updateAppState (state, struct){
	let router = 'main';
	return update(state, {[router]: struct});
}

const auth = 'AIzaSyDdxc-DZdxxTKTzUlasS4qdOpKj_uUrzBA';
const authId = '590908524683-ncecj6627jqghc1c20f3e8gfnbk34ou8.apps.googleusercontent.com';

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
		case Actions.SENDEMAIL:
			console.log('ACTION::: ', action);
			return state;
		case Actions.SENDEMAIL_SUCCESS:
			console.log('SUCCESS::: ', action);
			return state;
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

export function HttpClient () {
		this.get = function(aUrl, aCallback) {
				var anHttpRequest = new XMLHttpRequest();
				anHttpRequest.onreadystatechange = function() {
						if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200) {
							aCallback(anHttpRequest.responseText);
						}
				};

				anHttpRequest.open( 'GET', aUrl, true );
				anHttpRequest.send( null );
		};
}

export function sendEmail () {
	console.log('SEND');
	return (dispatch, state) => {
		console.log('STATE::: ', state());
		// return {
		// 	types: [Actions.SENDEMAIL, Actions.SENDEMAIL_SUCCESS, Actions.SENDEMAIL_FAIL],
		// 	promise: Email.send('info@templeofcreation.cz', 'dovrtel@templeofcreation.cz', 'Test', 'Hello', {token: '040471b8-81df-4840-9707-0d6fdad0c3a8'}),
		// };
	};
	// let client = new HttpClient();
	// let url = 'https://www.googleapis.com/calendar/v3/calendars/80fj4anc8ouf5ssdfl9i5cg77o%40group.calendar.google.com/events?alwaysIncludeEmail=true&key='+auth;
	// return {
	// 	type: 'LOCAL:SENDEMAIL',
	// 	promise: client.get(url,
	// 		(response) => {
	// 			console.log('REPONSE:: ', response);
	// 			saveCal(response);
	// 		}
	// 	)
	// };
		// return {
		// 	type: Actions.SENDEMAIL,
		// 	// promise: gapi().then(
		// 	// 	g.load('client')
		// 	// 	(g) => {
		// 	// 		g.client.init({
		// 	// 			'apiKey': auth,
		// 	// 			'clientId': authId,
		// 	// 			'scope': 'profile',
		// 	// 			// 'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
		// 	// 		}).then((r) => {
		// 	// 			console.log('R:: ', r);
		// 	// 			// Executes an API request, and returns a Promise.
		// 	// 			// The method name `language.translations.list` comes from the API discovery.
		// 	// 			return g.client.request({
		// 	// 				'path': 'http://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
		// 	// 			});
		// 	// 		}).then((response) => {
		// 	// 			console.log('TRANSLATE',response.result);
		// 	// 		}, (reason) => {
		// 	// 			console.log('Error: ' + reason);
		// 	// 		});
		// 	// 	}
		// 	// )
		// 	data:
		// };
}

export function saveCal (data) {
	console.log('DATA::: ', data);
	return {
		type: Actions.SENDEMAIL,
		data: data,
	};
}