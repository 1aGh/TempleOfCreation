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
		backgroundColor: theme.colors.burntorange,
	},
	blue: {
		backgroundColor: theme.colors.coolgrey,
	},
	yellow: {
		backgroundColor: theme.colors.sunset,
	}
});

export default theme;