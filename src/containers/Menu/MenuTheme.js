const theme = theme => ({
	link: {
		color: theme.colors.sand,
		fontSize: '1.2rem',
		textDecoration: 'none',
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: '10',
		transition: theme.transitions.create(),
		// @include transition(all cubic-bezier(0.4, 0.0, 0.2, 1) .475s),
		overflow: 'hidden',
		arrow: {
			fontSize: '0rem',
			transition: theme.transitions.create(),
			// @include transition(all cubic-bezier(0.4, 0.0, 0.2, 1) .475s),
		},
		arrowActive: {
			fontSize: '2rem',
			transition: theme.transitions.create(),
			// @include transition(all cubic-bezier(0.4, 0.0, 0.2, 1) .475s),
		},
		'&:visited': {
			color: theme.colors.sand,
		},
		'&:hover': {
			letterSpacing: '5rem',
			fontSize: '0.8rem',
			color: theme.colors.sunset,
			backgroundColor: 'rgba(0, 0, 0, 0.2)',
			arrow: {
				fontSize: '2rem',
			},
			arrowActive: {
				fontSize: '3rem',
			}
		}
	},
	label: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	topBtn: {
		top: '0',
		left: '0',
		width: '100%',
		height: '30px',
		padding: '10px 0 10px 0',
	},
	bottomBtn: {
		bottom: '0',
		left: '0',
		width: '100%',
		height: '30px',
		padding: '10px 0 10px 0',
	},
	rightBtn: {
		top: '0',
		right: '0',
		height: '100%',
		width: '30px',
		padding: '0 10px 0 10px',
	},
	rotateRt: {
		transform: 'rotate(90deg)',
	},
	leftBtn: {
		top: '0',
		left: '0',
		height: '100%',
		width: '30px',
		padding: '0 10px 0 10px',
	},
	rotateLf: {
		transform: 'rotate(-90deg)',
	}
});

export default theme;