const theme = theme => ({
	pageWrapper: {
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
});

export default theme;