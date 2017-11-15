import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import theme from './App.scss';
import { CSSTransition } from 'react-transition-group';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import MobileDetect from 'mobile-detect';

import Home from 'Home/Home';
import Test from 'Test/Test';
import IaghIcon from 'Icons/Iagh';
import Pong from 'Pong/Pong';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			anim: false,
			animSpeech: false,
			pong: false,
			iaghCount: 0,
			iaghSpeech: null,
			iagh: true,
			mobile: null,
		};
	}

	componentDidMount = () => {
		let mobile = new MobileDetect(window.navigator.userAgent);
		this.timeouts = [];
		if (!mobile.mobile()) {
			this.iaghAnim(true, 7000, this.state.iaghCount+1);
			this.speechAnim(true, 8000);
		}
		this.setState({mobile: mobile.mobile()});
	}

	componentDidUpdate = () => {
		if (this.state.iagh && !this.state.mobile) {
			if (this.state.anim) {
				if (this.state.pong) {
					this.setState({anim: false, animSpeech: false, iaghCount: 0, iaghSpeech: null});
				} else {
					this.iaghAnim(false, 60000, this.state.iaghCount);
					this.speechAnim(false, 60000);
				}
			} else if (!this.state.anim && !this.state.pong && (this.state.iaghCount <= 2)) {
				this.iaghAnim(true, 60000, this.state.iaghCount+1);
				this.speechAnim(true, 60000);
			}
		}
	}

	iaghAnim = (show, interval, count, action) => {
		this.timeouts.push(
			setTimeout(() => { this.setState({anim: show, iaghCount: count}); }, interval)
		);
	}

	speechAnim = (show, interval) => {
		if (!show) {
			this.timeouts.push(
				setTimeout(() => { this.setState({animSpeech: false}); }, interval)
			);
		} else {
			let speech1 = (<div>Hey!!</div>);
			let speech2 = (<div>Wanna play pong with me?</div>);
			let speech3 = (<div>
				<div className={theme.ovalBtn} onClick={this.pongHandle}>{'OK Let\'s play'}</div>
				<div className={theme.ovalBtn} onClick={this.foolHandle}>Go away you fool</div>
			</div>);
			this.timeouts.push(setTimeout(() => { this.setState({animSpeech: true, iaghSpeech: speech1}); }, interval));
			this.timeouts.push(setTimeout(() => { this.setState({animSpeech: true, iaghSpeech: speech2}); }, interval+2000));
			this.timeouts.push(setTimeout(() => { this.setState({animSpeech: true, iaghSpeech: speech3}); }, interval+5000));
		}
	}

	pongHandle = () => {
		this.timeouts.forEach(clearTimeout);
		if (!this.state.pong) {
			this.setState({pong: true, anim: false, animSpeech: false, iaghCount: 0, iaghSpeech: null, iagh: false});
		} else {
			this.setState({pong: false, anim: false, animSpeech: false, iaghCount: 0, iaghSpeech: null, iagh: true});
		}
	}

	foolHandle = () => {
		this.timeouts.forEach(clearTimeout);
		this.setState({anim: false, animSpeech: false, iaghCount: 0, iaghSpeech: null, iagh: false});
	}

	render() {
		const {pong, anim, animSpeech, iaghCount, iaghSpeech} = this.state;
		return (
			<div className={theme.main}>
				{!anim && <div className={theme.pongBtn} onClick={this.pongHandle}></div>}
				{pong && <Pong close={this.pongHandle}/>}
				<CSSTransition
					in={anim}
					timeout={60000}
					classNames={{
						appear: theme['enter'],
						appearActive: theme['enter-active'],
						enter: theme['enter'],
						enterActive: theme['enter-active'],
						exit: theme['leave'],
						exitActive: theme['leave-active']
					}}
				>
					<IaghIcon className={theme.iagh} key='IaghIcon' onClick={this.pongHandle}/>
				</CSSTransition>
				{animSpeech && <div key='IaghSpeach' className={theme['oval-speech-border']}>{iaghSpeech}</div>}
				{!pong &&
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/test' component={Test}/>
				</Switch>}
			</div>
		);
	}
}