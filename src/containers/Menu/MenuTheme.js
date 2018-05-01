const theme = theme => ({
	link: {
		color: theme.colors.sand,
		fontSize: '1.2rem',
		textDecoration: 'none',
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: '10',
		transition: theme.transitions.create(),
		overflow: 'visible',
		arrow: {
			fontSize: '0rem',
			transition: theme.transitions.create(),
		},
		arrowActive: {
			fontSize: '2rem',
			transition: theme.transitions.create(),
		},
		'&:visited': {
			color: theme.colors.sand,
		},
		'&:hover': {
			letterSpacing: '2rem',
			color: theme.colors.sand,
			// backgroundColor: 'rgba(0, 0, 0, 0.2)',
			arrow: {
				fontSize: '2rem',
			},
			arrowActive: {
				fontSize: '3rem',
			},
			'& $horArrow, & $verArrow': {
				opacity: 0,
				transform: 'translate(0px, 0px) !important',
			},
		}
	},
	label: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	topBtn: {
		top: '0',
		left: '0',
		width: '100%',
		height: '30px',
		padding: '10px 0 10px 0',
	},
	bottomBtn: {
		bottom: '50px',
		left: '0',
		width: '100%',
		height: '30px',
		padding: '10px 0 10px 0',
	},
	rightBtn: {
		top: '0',
		right: '0',
		height: '100%',
		width: '30px',
		padding: '0 10px 0 10px',
	},
	rotateRt: {
		transform: 'rotate(90deg)',
	},
	leftBtn: {
		top: '0',
		left: '0',
		height: '100%',
		width: '30px',
		padding: '0 10px 0 10px',
	},
	rotateLf: {
		transform: 'rotate(-90deg)',
	},
	verArrow: {
		position: 'absolute',
		height: '60px',
		transition: theme.transitions.create(),
	},
	horArrow: {
		position: 'absolute',
		width: '60px',
		transition: theme.transitions.create(),
	},
	backVerArrow: {
		height: '100px',
	},
	animBackLeft: {
		animation: 'leftarrow 3000ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
	},
	animBackRight: {
		animation: 'rightarrow 3000ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
	},
	backHorArrow: {
		width: '100px',
		animation: 'downarrow 3000ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
	},
	'@keyframes downarrow': {
		'0%': {
			transform: 'translateY(10px)',
		},
		'50%': {
			transform: 'translateY(0px)',
		},
		'100%': {
			transform: 'translateY(10px)',
		},
	},
	'@keyframes leftarrow': {
		'0%': {
			transform: 'translateX(10px)',
		},
		'50%': {
			transform: 'translateX(0px)',
		},
		'100%': {
			transform: 'translateX(10px)',
		},
	},
	'@keyframes rightarrow': {
		'0%': {
			transform: 'translateX(-10px)',
		},
		'50%': {
			transform: 'translateX(0px)',
		},
		'100%': {
			transform: 'translateX(-10px)',
		},
	},
});

export default theme;