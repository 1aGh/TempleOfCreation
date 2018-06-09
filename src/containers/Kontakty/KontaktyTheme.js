const theme = theme => ({
	kontaktyWrapper: {
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'column',
		margin: '5px',
	},
	row: {
		flex: '0 0 280px',
		display: 'flex',
		flexDirection: 'row',
		margin: '40px 100px',
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
	form: {
		flex: '1 1 auto',
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'column',
	},
	contacts: {
		padding: '10px',
		border: ['2px', 'dashed', theme.colors.sand],
		color: theme.colors.sand,
		textTransform: 'uppercase',
		maxWidth: '300px',
	},
	heading: {
		fontSize: '1.4rem',
	},
	message: {
		backgroundColor: theme.colors.sand,
		minHeight: '150px',
		margin: '0 99px -20px 100px',
		padding: '20px',
	},
	textField: {
		fontSize: '1rem',
	},
	input: {
		fontSize: '1.2rem',
		padding: '0 5px',
		backgroundColor: theme.colors.sand,
		'&:after':{
			display: 'none',
		},
		'&:before':{
			display: 'none',
		},
	},
	stamp: {
		width: '100px',
		height: '100px',
		border: ['2px', 'dashed', theme.colors.sand],
		marginBottom: '20px',
		'&>svg': {
			width: '110px',
		}
	}
});

export default theme;