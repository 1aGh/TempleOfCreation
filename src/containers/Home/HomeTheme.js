const theme = theme => ({
	homeWrapper: {
		height: '100%',
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		zIndex: 9,
	},
	homeContainer: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		fill: theme.colors.sand,
		height: '150px',
		width: '150px',
	},
	title: {
		color: theme.colors.sand,
		fontSize: '1rem',
		width: '180px',
		textAlign: 'center',
	},
	animContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default theme;