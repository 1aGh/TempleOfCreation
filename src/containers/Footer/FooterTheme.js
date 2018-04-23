const theme = theme => ({
	footerWrapper: {
		width: '100%',
		height: '50px !important',
		backgroundColor: theme.colors.blackoliveDark,
		position: 'fixed',
		bottom: '0',
		zIndex: 1,
	},
	footerWrapperEntered: {
		height: '100% !important',
	},
	btn: {
		textAlign: 'center',
	}
});

export default theme;