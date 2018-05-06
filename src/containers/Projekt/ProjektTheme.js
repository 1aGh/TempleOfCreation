const theme = theme => ({
	pageWrapper: {
		flex: '1 1 auto',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
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
	introBar: {
		width: '150px',
		height: '25px',
		background: theme.colors.blackolive,
		position: 'absolute',
		color: theme.colors.sand,
		display: 'flex',
		alignItems: 'center',
		left: 0,
		top: 0,
		'&:after': {
			content: '""',
			position: 'absolute',
			bottom: '-25px',
			left: '0',
			width: '0',
			height: '0',
			borderRight: '150px solid transparent',
			borderTop: ['25px', 'solid', theme.colors.blackolive],
		},
	},
	title: {
		fontSize: '1.4rem',
		textWrap: 'wrap',
		paddingLeft: '20px',
	},
	introduction: {
		position: 'relative',
		padding: '50px 20px 20px 20px',
		backgroundColor: theme.colors.sand,
		margin: '50px 20px',
	},
	pudorys: {
		display: 'flex',
		flexDirection: 'row',
		margin: '0 20px',
	},
	infoPudorysContainer: {
		flex: '1 1 auto',
		marginRight: '50px',
		backgroundColor: theme.colors.sand,
		color: theme.colors.blackolive,
		padding: '70px 20px 20px 20px',
		position: 'relative',
	},
	pudorysMap: {
		flex: '1 1 auto',
	},
	pudorysBar: {
		width: '50px',
		height: '50px',
		background: theme.colors.blackolive,
		position: 'absolute',
		color: theme.colors.sand,
		display: 'flex',
		alignItems: 'center',
		left: 0,
		top: 0,
		'&:after': {
			content: '""',
			position: 'absolute',
			bottom: '-10px',
			left: '0',
			width: '0',
			height: '0',
			borderRight: '50px solid transparent',
			borderTop: ['10px', 'solid', theme.colors.blackolive],
		},
	},
	pudorysTitle: {
		position: 'absolute',
		left: 60,
		top: 5,
		fontSize: '1.2rem',
		textTransform: 'uppercase',
	},
	pudorysArea: {
		position: 'absolute',
		left: 60,
		top: '2rem',
		fontSize: '0.8rem',
	}
});

export default theme;