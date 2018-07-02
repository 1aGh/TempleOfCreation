const theme = theme => ({
	pageWrapper: {
		flex: '1 1 auto',
		// padding: '50px',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		// overflow: 'scroll',
	},
	pageWrapperR: {
		flex: '1 1 auto',
		// padding: '50px',
		display: 'flex',
		justifyContent: 'center',
		// overflow: 'scroll',
	},
	infoHover: {
		position: 'absolute',
		width: '80%',
		height: '80%',
		padding: '10px',
		margin: '-10px',
		opacity: 0,
		display: 'flex',
		top: '10%',
		left: '10%',
		color: theme.colors.sand,
		cursor: 'pointer',
		transition: theme.transitions.create(),
		'&:hover': {
			opacity: 1,
			background: 'rgba(49, 47, 47, 0.95)',
		}
	},
	masonryContainer: {
		minWidth: '250px',
		padding: '5px',
		border: ['2px', 'dashed', theme.colors.blackolive],
	},
	dialogBar: {
		width: '250px',
		height: '50px',
		background: theme.colors.sand,
		position: 'fixed',
		color: theme.colors.blackolive,
		display: 'flex',
		alignItems: 'center',
		left: 0,
		top: 0,
		zIndex: 10,
		'&:after': {
			content: '""',
			position: 'absolute',
			bottom: '-50px',
			left: '0',
			width: '0',
			height: '0',
			borderRight: '250px solid transparent',
			borderTop: ['50px', 'solid', theme.colors.sand],
			zIndex: 10,
		},
	},
	title: {
		fontSize: '1.4rem',
		textWrap: 'wrap',
		paddingLeft: '20px',
	},
	filter: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: '40px',
		color: theme.colors.sand,
	},
	divider: {
		margin: '0 5px',
	},
	filterBtn: {
		cursor: 'pointer',
		transition: theme.transitions.create(),
		padding: '5px',
		'&:hover': {
			opacity: 0.8,
		}
	},
	fSelected: {
		border: ['1px', 'solid', theme.colors.sand],
	}
});

export default theme;