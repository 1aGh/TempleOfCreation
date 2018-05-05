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
		cursor: 'pointer',
		transition: theme.transitions.create(),
		'&:hover': {
			transform: 'translateX(-10px)',
		}
	},
	arrow: {
		height: '100%',
		fill: theme.colors.blackolive,
	}
});

export default theme;