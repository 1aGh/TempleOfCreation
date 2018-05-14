const theme = theme => ({
	container: {
		height: '800px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '50px 10px',
	},
	graph: {
		width: '80%',
	},
	headline: {
		textAlign: 'center',
		fontSize: '2rem',
		color: theme.colors.sand,
		margin: '35px 0 15px 0',
	}
});

export default theme;