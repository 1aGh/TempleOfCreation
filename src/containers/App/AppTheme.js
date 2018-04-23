const theme = theme => ({
	'@global': {
		body: {
			fontFamily: "'Roboto Mono', monospace",
		}
	},
	main: {
		width: '100%',
		height: '100%',
		// backgroundImage: 'url(/store/static/pattern.svg)',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'contain',
	},
	pageRoute: {
		position: 'fixed',
		overflow: 'hidden',
		height: '100%',
		width: '100%',
		zIndex: 1,
	},
	pageMainInner: {
		position: 'absolute',
		display: 'flex',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		zIndex: '1',
		padding: '50px',
	},
	particles: {
		backgroundColor: 'rgb(49, 47, 47)',
		position: 'fixed',
		width: '100vw',
		height: '100vh',
		zIndex: 0,
	}
});

export default theme;