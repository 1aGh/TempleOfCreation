const theme = theme => ({
	dialogWrapper: {
		display: 'flex',
		height: '100%',
		backgroundColor: '#E7C88F',
		flexDirection: 'column',
	},
	dialogBar: {
		width: '100vw',
		height: '100px',
		flex: '0 0 100px',
		background: theme.colors.blackolive,
		position: 'relative',
		color: theme.colors.sand,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		'&:after': {
			content: '""',
			position: 'absolute',
			bottom: '-100px',
			left: '0',
			width: '0',
			height: '0',
			borderLeft: '50vw solid transparent',
			borderRight: '50vw solid transparent',
			borderTop: ['100px', 'solid', theme.colors.blackolive],
			zIndex: '999',
		},
	},
	cancelBtn: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		fontSize: '2rem',
		cursor: 'pointer',
		color: theme.colors.sand,
		transition: theme.transitions.create(),
		'&:hover': {
			opacity: '0.5',
		}
	},
	contentContainer: {
		flex: '1 1 auto',
		paddingTop: '100px',
	},
	infoWrapper: {
		color: theme.colors.blackolive,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '40px 0 20px 0',
	},
	border: {
		border: ['solid', '2px', theme.colors.blackolive],
		margin: '-1px',
		padding: '10px',
	},
	titleWr: {
		width: '400px',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		width: '400px',
		border: ['solid', '2px', theme.colors.blackolive],
		padding: '0 10px',
		margin: '-1px 0',
	},
	thCell: {
		flex: '0 0 100px',
		borderRight: ['solid', '2px', theme.colors.blackolive],
		padding: '10px 0',
	},
	cell: {
		flex: '1 1 auto',
		padding: '10px',
	},
	description: {
		width: '400px',
	},
	descTitle: {
		paddingBottom: '5px',
	},
	photoRow: {
		minHeight: '400px',
		display: 'flex',
	},
	photo: {
		flex: '1 1 auto',
		margin: '10px',
		overflow: 'hidden',
	}
});

export default theme;