const theme = theme => ({
	main: {
		width: '100%',
		height: '100%',
		fontFamily: ['Roboto Mono', 'monospace'],
		backgroundColor: 'rgb(49, 47, 47)',
		// backgroundImage: 'url(/store/static/pattern.svg)',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'contain',
	},
	pageRoute: {
		position: 'fixed',
		overflow: 'hidden',
		height: '100%',
		width: '100%',
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
});

export default theme;