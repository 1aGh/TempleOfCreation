const theme = theme => ({
	dialogWrapper: {
		display: 'flex',
		height: '100%',
		backgroundColor: theme.colors.blackolive,
		flexDirection: 'column',
	},
	dialogBar: {
		width: '250px',
		height: '50px',
		background: theme.colors.sand,
		position: 'absolute',
		color: theme.colors.blackolive,
		display: 'flex',
		justifyContent: 'center',
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
			// borderLeft: '75px solid transparent',
			borderRight: '250px solid transparent',
			borderTop: ['50px', 'solid', theme.colors.sand],
			zIndex: 10,
		},
	},
	cancelBtn: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		fontSize: '2rem',
		cursor: 'pointer',
		color: theme.colors.blackolive,
		transition: theme.transitions.create(),
		zIndex: 11,
		'&:hover': {
			transform: 'rotate(360deg)'
		}
	},
	closeIcn: {
		stroke: theme.colors.blackolive,
		height: '100%',
		width: '100%',
	},
	title: {
		marginLeft: '3rem',
		paddingLeft: '20px',
		paddingRight: '20px',
		fontSize: '1.2rem',
		textWrap: 'wrap',
	}
});

export default theme;