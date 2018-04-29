const theme = theme => ({
	footerWrapper: {
		width: '100%',
		height: '50px !important',
		backgroundColor: theme.colors.blackoliveDark,
		position: 'fixed',
		bottom: '0',
		zIndex: 10,
	},
	muiWrapper: {
		flex: '1 1 auto',
	},
	footerWrapperEntered: {
		height: '100% !important',
		display: 'flex',
		flexDirection: 'column'
	},
	footerWrapperInner: {
		display: 'flex',
		flexDirection: 'column',
	},
	footerContainer: {
		flex: '0 0 50px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	menuContainer: {
		flex: '1 1 auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		position: 'absolute',
		left: '50%',
		margin: '0px 0 0px -25px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '50px',
		width: '50px',
		borderColor: theme.colors.sand,
		backgroundColor: theme.colors.blackoliveDark,
		cursor: 'pointer',
	},
	iconLogo: {
		lineHeight: '50px',
		position: 'absolute',
		width: '25px',
		height: '25px',
		fill: theme.colors.sand,
	},
	iconMenu: {
		lineHeight: '50px',
		position: 'absolute',
		width: '50px',
		height: '50px',
		fill: theme.colors.sand,
		transition: theme.transitions.create(),
		'&:hover':{
			transform: 'scale(0.8)',
		}
	},
	location: {
		color: theme.colors.sand,
		fontSize: '1.2rem',
		lineHeight: '50px',
		margin: '0 10px',
	},
	footer: {
		color: theme.colors.sand,
		display: 'flex',
		alignItems: 'center',
		marginLeft: '10px',
	},
	copyright: {
		fontSize: '0.8rem',
	},
	menu: {
		textAlign: 'center',
		listStyleType: 'none',
		margin: '0',
		padding: '0',
		lineHeight: '50px',
	},
	link: {
		color: theme.colors.sand,
		transition: theme.transitions.create(),
		fontSize: '2rem',
		padding: '5px',
		'&:hover': {
			border: ['2px', 'solid', theme.colors.sand]
		}
	}
});

export default theme;