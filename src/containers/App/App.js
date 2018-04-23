import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import animation from './RouteAnimation.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MobileDetect from 'mobile-detect';

import Home from 'Home/Home';
import Projekt from 'Projekt/Projekt';
import Kontakty from 'Kontakty/Kontakty';
import Portfolio from 'Portfolio/Portfolio';
import Iagh from 'Iagh/Iagh';
import Pong from 'Pong/Pong';
import Menu from 'Menu/Menu';
import MenuMap from 'MenuMap/MenuMap';

import { MuiThemeProvider, createGenerateClassName, withStyles } from 'material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import jssPreset from 'jss-preset-default';
import { create } from 'jss';
import themeMui from 'theme/themeMui.js';
import theme from './AppTheme.js';
import Particles from 'react-particles-js';

const generateClassName = createGenerateClassName({
	productionPrefix: 'toc',
});

const jss = create(jssPreset());
@withStyles(theme)

class App extends Component {
	static propTypes = {
		location: PropTypes.any,
		classes: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			pong: false,
			mobile: null,
			animation: {},
		};
	}

	componentDidMount = () => {
		let mobile = new MobileDetect(window.navigator.userAgent);
		let anim = this.animSwitcher('fadeIn', 'fadeOut');
		this.setState({mobile: mobile.mobile(), animation: anim});
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.location && nextProps.location.pathname && this.props.location && this.props.location.pathname) {
			let path = this.props.location.pathname;
			let nextPath = nextProps.location.pathname;
			let anim = {...this.state.animation};
			if (path === '/') {
				switch (nextPath) {
					case '/projekt':
						anim = this.animSwitcher('fromRight', 'zoomOutFade');
						break;
					case '/kontakty':
						anim = this.animSwitcher('fromTop', 'zoomOutFade');
						break;
					case '/portfolio':
						anim = this.animSwitcher('fromLeft', 'zoomOutFade');
						break;
					case '/menu':
						anim = this.animSwitcher('zoomOut', 'zoomIn');
						break;
				}
			} else if (path === '/projekt') {
				switch (nextPath) {
					case '/':
						anim = this.animSwitcher('fromLeft', 'fadeOut');
						break;
					case '/menu':
						anim = this.animSwitcher('zoomOut', 'zoomIn');
						break;
				}
			} else if (path === '/kontakty') {
				switch (nextPath) {
					case '/':
						anim = this.animSwitcher('fromBottom', 'fadeOut');
						break;
					case '/menu':
						anim = this.animSwitcher('zoomOut', 'zoomIn');
						break;
				}
			} else if (path === '/portfolio') {
				switch (nextPath) {
					case '/':
						anim = this.animSwitcher('fromRight', 'fadeOut');
						break;
					case '/menu':
						anim = this.animSwitcher('zoomOut', 'zoomIn');
						break;
				}
			} else if (path === '/menu') {
				anim = this.animSwitcher('zoomInFade', 'fadeOut');
			}
			this.setState({animation: anim});
		}
	}

	animSwitcher = (enter, exit) => {
		let anim = {
			appear: animation[enter],
			appearActive: animation[enter+'Active'],
			enter: animation[enter],
			enterActive: animation[enter+'Active'],
			exit: animation[exit],
			exitActive: animation[exit+'Active'],
		};
		return anim;
	}

	pongHandle = () => {
		this.setState({pong: !this.state.pong});
	}

	render() {
		const {pong, mobile, animation} = this.state;
		const {location, classes} = this.props;
		const currentKey = location.pathname.split('/')[1] || '/';
		const timeout = { enter: 475, exit: 375 };
console.log('THEME: ', themeMui);
		return (
			<JssProvider jss={jss} generateClassName={generateClassName}>
				<MuiThemeProvider theme={themeMui}>
					<div>
						<Menu location={location}/>
						{/* <Iagh mobile={mobile} pongHandle={this.pongHandle} pong={pong}/> */}
						{pong && <Pong close={this.pongHandle}/>}
						{!pong &&
							<TransitionGroup component="main" className={classes.pageRoute}>
								<CSSTransition
									appear
									key={currentKey}
									timeout={timeout}
									classNames={animation}
									mountOnEnter={true}
									unmountOnExit={true}
									>
										<section className={classes.pageMainInner}>
											<Switch location={location}>
												<Route exact path='/' component={Home}/>
												<Route exact path='/projekt' component={Projekt}/>
												<Route exact path='/kontakty' component={Kontakty}/>
												<Route exact path='/portfolio' component={Portfolio}/>
												<Route exact path='/menu' component={MenuMap}/>
											</Switch>
										</section>
									</CSSTransition>
								</TransitionGroup>
							}
							<Particles className={classes.main} params={{
							  "particles": {
							    "number": {
							      "value": 80,
							      "density": {
							        "enable": true,
							        "value_area": 800
							      }
							    },
							    "color": {
							      "value": "#eab543"
							    },
							    "shape": {
							      "type": "circle",
							      "stroke": {
							        "width": 0,
							        "color": "#000000"
							      },
							      "polygon": {
							        "nb_sides": 5
							      },
							      "image": {
							        "src": "img/github.svg",
							        "width": 100,
							        "height": 100
							      }
							    },
							    "opacity": {
							      "value": 0.49705773886831206,
							      "random": false,
							      "anim": {
							        "enable": false,
							        "speed": 1,
							        "opacity_min": 0.1,
							        "sync": false
							      }
							    },
							    "size": {
							      "value": 3,
							      "random": true,
							      "anim": {
							        "enable": false,
							        "speed": 40,
							        "size_min": 0.1,
							        "sync": false
							      }
							    },
							    "line_linked": {
							      "enable": false,
							      "distance": 150,
							      "color": "#eab543",
							      "opacity": 0.4,
							      "width": 1
							    },
							    "move": {
							      "enable": true,
							      "speed": 0.5,
							      "direction": "none",
							      "random": true,
							      "straight": false,
							      "out_mode": "out",
							      "bounce": false,
							      "attract": {
							        "enable": true,
							        "rotateX": 1122.388442605866,
							        "rotateY": 1122.388442605866
							      }
							    }
							  },
							  "interactivity": {
							    "detect_on": "window",
							    "events": {
							      "onhover": {
							        "enable": true,
							        "mode": "grab"
							      },
							      "onclick": {
							        "enable": true,
							        "mode": "push"
							      },
							      "resize": true
							    },
							    "modes": {
							      "grab": {
							        "distance": 80,
							        "line_linked": {
							          "opacity": 1
							        }
							      },
							      "bubble": {
							        "distance": 400,
							        "size": 40,
							        "duration": 2,
							        "opacity": 8,
							        "speed": 3
							      },
							      "repulse": {
							        "distance": 89.32849335314796,
							        "duration": 0.4
							      },
							      "push": {
							        "particles_nb": 4
							      },
							      "remove": {
							        "particles_nb": 2
							      }
							    }
							  },
							  "retina_detect": true
							}}/>
						</div>
					</MuiThemeProvider>
			</JssProvider>
		);
	}
}

export default withRouter(App);