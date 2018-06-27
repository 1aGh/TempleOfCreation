const theme = theme => ({
	slider: {
		display: 'flex',
		height: '100%',
		position: 'relative',
	},
	forward: {
		height: '100px',
		position: 'absolute',
		top: '50%',
		right: '20px',
		cursor: 'pointer',
		transition: theme.transitions.create(),
		'&:hover': {
			transform: 'translateX(10px)',
		}
	},
	backward: {
		height: '100px',
		position: 'absolute',
		top: '50%',
		left: '20px',
		transition: theme.transitions.create(),
	},
	arrBtnLeft: {
		position: 'absolute',
		width: '50%',
		height: '100%',
		cursor: 'pointer',
		zIndex: 5,
		'&:hover > $backward': {
			transform: 'translateX(-10px)',
		}
	},
	arrBtnRight: {
		extend: 'arrBtnLeft',
		right: 0,
		'&:hover > $forward': {
			transform: 'translateX(-10px)',
		}
	},
	arrow: {
		height: '100%',
		fill: theme.colors.blackolive,
	},
	transition: {
		flex: '1 1 auto',
		overflow: 'hidden',
	},
	counter: {
		position: 'absolute',
		left: 20,
		bottom: 20,
		color: theme.colors.sand,
		fontSize: '3.5rem',
		fontWeight: '300',
		width: '100px',
		height: '100px',
	},
	counterIndex: {
		top: 0,
		position: 'absolute',
	},
	counterLine: {
		position: 'absolute',
		top: -30,
		left: 10,
		transform: 'rotate(20deg)',
		fontSize: '120px',
		fontWeight: '100',
	},
	counterLength: {
		position: 'absolute',
		right: 0,
		bottom: 0,
	}
});

export default theme;