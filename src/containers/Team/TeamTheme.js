const theme = theme => ({
	kontaktyWrapper: {
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: '30px',
		// border: ['2px', 'solid', theme.colors.blackolive]
	},
	scrollbars: {
		flex: '1 1 auto',
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
	closeBar: {
		width: '100px',
		background: theme.colors.blackolive,
		'&:after': {
			borderRight: '100px solid transparent',
			borderTop: ['50px', 'solid', theme.colors.blackolive],
		}
	},
	title: {
		fontSize: '1.4rem',
		textWrap: 'wrap',
		paddingLeft: '20px',
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
	cancelSand: {
		color: theme.colors.sand,
		stroke: theme.colors.sand + ' !important',
	},
	closeIcn: {
		stroke: theme.colors.blackolive,
		height: '100%',
		width: '100%',
	},
	teammate: {
		border: ['1px', 'solid', theme.colors.sand],
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		color: theme.colors.sand,
		fontSize: '0.8rem',
		textAlign: 'center',
		cursor: 'pointer',
		padding: '5px 5px 0 5px',
		transition: theme.transitions.create(),
		'&:hover': {
			borderWidth: '3px',
			padding: '0px 3px 0px 3px',
		}
	},
	photo: {
		flex: '0 0 auto',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		minHeight: '100px',
		margin: '10px',
	},
	divider: {
		fontSize: '2rem',
		padding: '10px',
	},
	jednatel: {
		backgroundColor: theme.colors.sand,
		color: theme.colors.blackolive,
		padding: '5px',
		margin: '5px -5px -7px -5px',
		textTransform: 'uppercase',
	},
	teammateWrapper: {
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: theme.colors.booger,
		backgroundImage: 'url(api/store/static/pattern.png)',
		backgroundRepeat: 'repeat',
		padding: '30px',
	},
	teamContainer: {
		padding: '30px',
	},
	teamPhoto: {
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		minHeight: '300px',
		minWidth: '440px',
	},
	mainInfo: {
		border: ['3px', 'solid', theme.colors.blackolive],
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '1.2rem',
	},
	teamName: {
		fontSize: '1.5rem',
	},
	teamDivider: {
		fontSize: '3rem',
		margin: '10px',
	},
	teamAbout: {
		border: ['3px', 'solid', theme.colors.blackolive],
		padding: '20px',
		flex: '1 1 auto',
	},
	dotWrapper: {
		border: ['3px', 'dashed', theme.colors.blackolive],
		padding: '20px',
		flex: '1 1 auto',
	},
	list: {
		listStyle: 'none',
		padding: '0',
		marginLeft: '2rem',
	},
	litem: {
		paddingLeft: '1.3rem',
		'&:before': {
			content: '"/"',
			display: 'inline-block',
			marginLeft: '-1.3rem',
			width: '1.3rem',
		}
	},
	hobbyContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	miniTitle: {
		fontSize: '1.5rem',
		padding: '10px',
		textTransform: 'uppercase',
	},
	skillsTitle: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '200px',
	},
	skillWrapper: {
		border: ['3px', 'solid', theme.colors.blackolive],
		padding: '20px',
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'row',
	},
	skillsContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginLeft: '20px',
		borderLeft: ['3px', 'solid', theme.colors.blackolive],
	},
	skill: {
		maxWidth: '150px',
		padding: '20px',
	}
});

export default theme;