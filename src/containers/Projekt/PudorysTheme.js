const theme = theme => ({
	pudorysCont: {
		width: 600,
		height: 600,
		backgroundColor: theme.colors.sand,
		position: 'relative',
	},
	item: {
		position: 'absolute',
		border: ['2px', 'solid', theme.colors.blackolive],
	},
	orange: {
		backgroundSize: '100% 200%',
		backgroundImage: 'linear-gradient(to top,'+theme.colors.blackolive+'50%,'+theme.colors.burntorange+'50%)',
		transition: theme.transitions.create(),
		color: theme.colors.blackolive,
		cursor: 'pointer',
		'&:hover': {
			backgroundPosition: '0 -100%',
			color: theme.colors.sand,
		}
	},
	blue: {
		backgroundSize: '100% 200%',
		backgroundImage: 'linear-gradient(to top,'+theme.colors.blackolive+'50%,'+theme.colors.coolgrey+'50%)',
		transition: theme.transitions.create(),
		color: theme.colors.blackolive,
		cursor: 'pointer',
		'&:hover': {
			backgroundPosition: '0 -100%',
			color: theme.colors.sand,
		}
	},
	yellow: {
		backgroundSize: '100% 200%',
		backgroundImage: 'linear-gradient(to top,'+theme.colors.blackolive+'50%,'+theme.colors.sunset+'50%)',
		transition: theme.transitions.create(),
		color: theme.colors.blackolive,
		cursor: 'pointer',
		'&:hover': {
			backgroundPosition: '0 -100%',
			color: theme.colors.sand,
		}
	},
	num: {
		position: 'absolute',
		right: '0',
		top: -10,
		padding: '5px',
		fontSize: '4rem',
	},
	title: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		padding: '5px',
	}
});

export default theme;