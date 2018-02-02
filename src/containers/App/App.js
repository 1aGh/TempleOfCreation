import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from './App.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import MobileDetect from 'mobile-detect';

import Home from 'Home/Home';
import Test from 'Test/Test';
import Iagh from 'Iagh/Iagh';
import Pong from 'Pong/Pong';

class App extends Component {
	static propTypes = {
		location: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			pong: false,
			mobile: null,
		};
	}

	componentDidMount = () => {
		let mobile = new MobileDetect(window.navigator.userAgent);
		this.setState({mobile: mobile.mobile()});
	}

	pongHandle = () => {
		this.setState({pong: !this.state.pong});
	}

	render() {
		const {pong, anim, animSpeech, iaghCount, iaghSpeech, mobile} = this.state;
		const {location} = this.props;
		const currentKey = location.pathname.split('/')[1] || '/';
		const timeout = { enter: 475, exit: 375 };
		return (
			<div className={theme.main}>
				<Iagh mobile={mobile} pongHandle={this.pongHandle} pong={pong}/>
				{pong && <Pong close={this.pongHandle}/>}
				{!pong &&
					<TransitionGroup component="main" className={theme.pageRoute}>
						<CSSTransition
							appear
							key={currentKey}
							timeout={timeout}
							classNames={{
								appear: theme.in,
								appearActive: theme.inActive,
								enter: theme.in,
								enterActive: theme.inActive,
								exit: theme.out,
								exitActive: theme.outActive
							}}
							mountOnEnter={true}
							unmountOnExit={true}
							>
								<section className={theme.pageMainInner}>
									<Switch location={location}>
										<Route exact path='/' component={Home}/>
										<Route exact path='/test' component={Test}/>
									</Switch>
								</section>
							</CSSTransition>
					</TransitionGroup>
				}
			</div>
		);
	}
}

export default withRouter(App);