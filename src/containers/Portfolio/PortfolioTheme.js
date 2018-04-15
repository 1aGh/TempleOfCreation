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
		width: '100%',
		height: '100%',
		opacity: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		top: 0,
		left: 0,
		color: theme.colors.white,
		cursor: 'pointer',
		transition: theme.transitions.create(),
		'&:hover': {
			opacity: 1,
			background: 'rgba(0,0,0,0.7)',
		}
	},
	masonryContainer: {
		minWidth: '250px',
		padding: '5px',
		border: ['2px', 'dashed', theme.colors.blackolive],
	},
});

export default theme;