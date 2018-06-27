import superagent from 'superagent';
import noCache from 'superagent-no-cache';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl (path) {
	if (path.match('^http')) {
		return path;
	}
	const adjustedPath = path[0] !== '/' ? '/' + path : path;
	return '' + adjustedPath;
}

export default class ApiClient {
	constructor (req) {
		methods.forEach((method) => (
			this[method] = (path, { params, data, header } = {}) => new Promise((resolve, reject) => {
				const request = superagent[method](formatUrl(path));
				console.log('REQUEST: ', request);
				request.use(noCache);
				request.withCredentials();
				request.set('Accept', 'application/json');

				if (params) {
					request.query(params);
				}

				if (header) {
					header.forEach((head) => {
						request.set(head[0], head[1]);
					});
				}

				if (data) {
					request.send(data);
				}

				request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
			})));
	}
	/*
	 * There's a V8 bug where, when using Babel, exporting classes with only
	 * constructors sometimes fails. Until it's patched, this is a solution to
	 * "ApiClient is not defined" from issue #14.
	 * https://github.com/erikras/react-redux-universal-hot-example/issues/14
	 *
	 * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
	 *
	 * Remove it at your own risk.
	 */
	empty () {}
}
