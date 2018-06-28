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

// const auth = 'wBMGd8RShfqoixI9KcKcBQ5q';
const auth = 'AIzaSyDdxc-DZdxxTKTzUlasS4qdOpKj_uUrzBA';
const authId = '590908524683-khma2hd3hka18m9gjnoanb1m5r2jrtb7.apps.googleusercontent.com';

export const Actions = {
	'ADDIMAGES': 'toc/app/ADDIMAGES',
	'MESSAGEHANDLE': 'toc/app/MESSAGEHANDLE',

	'SENDEMAIL': 'toc/app/SENDEMAIL',
	'SENDEMAIL_SUCCESS': 'toc/app/SENDEMAIL_SUCCESS',
	'SENDEMAIL_FAIL': 'toc/app/SENDEMAIL_FAIL',

	'GETFOLDER': 'toc/app/GETFOLDER',
	'GETFOLDER_SUCCESS': 'toc/app/GETFOLDER_SUCCESS',
	'GETFOLDER_FAIL': 'toc/app/GETFOLDER_FAIL'
};

export const initialState = {
	portfolio: portfolioStore,
	portfolioImg: {},
	pudorysText: pudorysText,
	network: network,
	draft: {},
};

export default function reducer(state = initialState, action = {}) {
	console.log('STATE:: ', state);
	switch (action.type) {
		case Actions.ADDIMAGES:
			return update(state, {portfolioImg: {$set: {[action.id]: action.value}}});
		case Actions.MESSAGEHANDLE:
			return update(state, {draft: {$merge: {[action.kind]: action.value}}});
		case Actions.SENDEMAIL:
			console.log('ACTION::: ', action);
			return state;
		case Actions.SENDEMAIL_SUCCESS:
			console.log('SUCCESS::: ', action);
			return state;
		case Actions.GETFOLDER_SUCCESS:
			console.log('SUCCESS::: ', action, state);
			return update(state, {portfolioImg: {$merge: {[action.id]: action.result}}});
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
	console.log('TYPE:: ', type, value);
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
	return (dispatch, state) => {
		let st = state();
		let draft = st.main.draft;
		let url = '/api/sendMail';
		console.log('SEND', draft);
		return {
			types: [Actions.SENDEMAIL, Actions.SENDEMAIL_SUCCESS, Actions.SENDEMAIL_FAIL],
			promise: (client) => client.post(url, {
				data: JSON.stringify(draft),
				header: [['Content-Type', 'application/json'],['charset','UTF-8']],
			}),
		};
	};
}

export function getFolder (id) {
	let url = '/api/getFolder/'+id;
	return {
		types: [Actions.GETFOLDER, Actions.GETFOLDER_SUCCESS, Actions.GETFOLDER_FAIL],
		id: id,
		promise: (client) => client.get(url),
	};
}

export function saveCal (data) {
	console.log('DATA::: ', data);
	return {
		type: Actions.SENDEMAIL,
		data: data,
	};
}