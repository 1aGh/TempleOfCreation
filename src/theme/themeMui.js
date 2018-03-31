import { createMuiTheme } from 'material-ui/styles';

let sand = 'rgb(233, 197, 121)';
let blackoliveDark = 'rgb(36, 34, 42)';
let blackolive = 'rgb(68, 66, 77)';
let blackolive80 = 'rgb(121, 117, 138)';
let burntorange = 'rgb(215, 128, 59)';
let burntorange80 ='rgb(213, 151, 90)';
let cinereous = 'rgb(192, 186, 150)';
let coolgrey = 'rgb(154, 171, 185)';
let steelblue = 'rgb(196, 212, 224)';
let sunset = 'rgb(255, 212, 114)';
let booger = 'rgb(252, 249, 193)';
let brickDark = 'rgb(198, 109, 57)';
let brick = 'rgb(226, 180, 154)';
let white = 'rgb(252, 252, 252)';

const theme = createMuiTheme({
	colors: {
		sand: sand,
		blackoliveDark: blackoliveDark,
		blackolive: blackolive,
		blackolive80: blackolive80,
		burntorange: burntorange,
		burntorange80: burntorange80,
		cinereous: cinereous,
		coolgrey: coolgrey,
		steelblue: steelblue,
		sunset: sunset,
		booger: booger,
		brickDark: brickDark,
		brick:  brick,
		white: white,
	},
	palette: {
		primary: {
			light: booger,
			main: sand,
			dark: sunset,
			contrastText: white,
		},
		secondary: {
			light: blackolive80,
			main: blackolive,
			dark: blackoliveDark,
			contrastText: white,
		},
		error: {
			light: burntorange80,
			main: brick,
			dark: brickDark,
			contrastText: white,
		},
		text: {
			secondary: sand,
			primary: blackolive,
		},
	},
	typography: {
		fontFamily: "'Roboto Mono', 'monospace'",
		fontSize: 14,
		htmlFontSize: 10,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

export default theme;