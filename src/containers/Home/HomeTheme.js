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
		height: '100px',
		width: '100px',
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
	logoContainer: {
		paddingBottom: '50px',
	},
	infoContainer: {
		position: 'relative',
		overflow: 'visible',
		display: 'flex',
		flexDirection: 'column',
		width: '100px',
		height: '120px',
		border: ['2px', 'solid', theme.colors.sand],
		backgroundColor: theme.colors.blackolive,
		padding: '30px 20px 20px 20px',
		textWrap: 'wrap',
		margin: '20px',
		transformOrigin: 'top center',
		cursor: 'pointer',
		'&:hover': {
			'& $animIcon': {
				animation: 'bcg 900ms steps(25) infinite',
			},
		}
	},
	animInfoContainer: {
		animation: 'animContainer 2000ms cubic-bezier(0.4, 0, 0.2, 1)',
	},
	infoWrapper: {
		display: 'flex',
		flexDirection: 'row',
	},
	animIcon: {
		height: '100px',
		width: '100px',
		transition: 'steps(25) 275ms',
	},
	'@keyframes bcg': {
		'0%': {
			backgroundPositionX: '0px',
		},
		'100%': {
			backgroundPositionX: '-2500px',
		}
	},
	'@keyframes animContainer': {
		'0%': {
			transform: 'rotate(-5deg)',
		},
		'20%': {
			transform: 'rotate(5deg)',
		},
		'40%': {
			transform: 'rotate(-2.5deg)',
		},
		'60%': {
			transform: 'rotate(2.5deg)',
		},
		'80%': {
			transform: 'rotate(-1deg)',
		},
		'90%': {
			transform: 'rotate(1deg)',
		},
		'100%': {
			transform: 'rotate(0deg)',
		},
	},
	animIconContainer: {
		display: 'flex',
		flex: '1 1 auto',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pinIcon: {
		width: '50px',
		top: '-30px',
		left: '50%',
		position: 'absolute',
	}
});

export default theme;