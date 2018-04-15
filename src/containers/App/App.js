import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from './App.scss';
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

import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import jssPreset from 'jss-preset-default';
import { create } from 'jss';
import themeMui from 'theme/themeMui.js';

const generateClassName = createGenerateClassName({
	productionPrefix: 'toc',
});

const jss = create(jssPreset());

class App extends Component {
	static propTypes = {
		location: PropTypes.any,
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
		const {location} = this.props;
		const currentKey = location.pathname.split('/')[1] || '/';
		const timeout = { enter: 475, exit: 375 };

		return (
			<JssProvider jss={jss} generateClassName={generateClassName}>
				<MuiThemeProvider theme={themeMui}>
					<div className={theme.main}>
						<Menu location={location}/>
						{/* <Iagh mobile={mobile} pongHandle={this.pongHandle} pong={pong}/> */}
						{pong && <Pong close={this.pongHandle}/>}
						{!pong &&
							<TransitionGroup component="main" className={theme.pageRoute}>
								<CSSTransition
									appear
									key={currentKey}
									timeout={timeout}
									classNames={animation}
									mountOnEnter={true}
									unmountOnExit={true}
									>
										<section className={theme.pageMainInner}>
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
						</div>
					</MuiThemeProvider>
			</JssProvider>
		);
	}
}

export default withRouter(App);