import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './Iagh.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import IaghIcon from 'Icons/Iagh';

export default class App extends Component {
	static propTypes = {
		mobile: PropTypes.any,
		pongHandle: PropTypes.any,
		pong: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			anim: false,
			animSpeech: false,
			iaghCount: 0,
			iaghSpeech: null,
			iagh: true,
		};
	}

	componentDidMount = () => {
		this.timeouts = [];
		if (!this.props.mobile) {
			this.iaghAnim(true, 7000, this.state.iaghCount+1);
			this.speechAnim(true, 8000);
		}
	}

	componentDidUpdate = () => {
		if (this.state.iagh && !this.props.mobile) {
			if (this.state.anim) {
				if (this.props.pong) {
					this.timeouts.forEach(clearTimeout);
					this.setState({anim: false, animSpeech: false, iaghCount: 0, iaghSpeech: null, iagh: true});
				} else {
					this.iaghAnim(false, 60000, this.state.iaghCount);
					this.speechAnim(false, 60000);
					// this.setState({anim: false, animSpeech: false, iaghCount: 0, iaghSpeech: null, iagh: false});
				}
			} else if (!this.state.anim && !this.props.pong && (this.state.iaghCount <= 2)) {
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
				<div className={theme.ovalBtn} onClick={this.props.pongHandle}>{'OK Let\'s play'}</div>
				<div className={theme.ovalBtn} onClick={this.foolHandle}>Go away you fool</div>
			</div>);
			this.timeouts.push(setTimeout(() => { this.setState({animSpeech: true, iaghSpeech: speech1}); }, interval));
			this.timeouts.push(setTimeout(() => { this.setState({animSpeech: true, iaghSpeech: speech2}); }, interval+2000));
			this.timeouts.push(setTimeout(() => { this.setState({animSpeech: true, iaghSpeech: speech3}); }, interval+5000));
		}
	}

	foolHandle = () => {
		this.timeouts.forEach(clearTimeout);
		this.setState({anim: false, animSpeech: false, iaghCount: 0, iaghSpeech: null, iagh: false});
	}

	render() {
		const { anim, animSpeech, iaghCount, iaghSpeech } = this.state;
		return (
			<div className={theme.iaghContainer}>
				{!anim && !this.props.pong && <div className={theme.pongBtn} onClick={this.props.pongHandle}></div>}
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
					<IaghIcon className={theme.iagh} key='IaghIcon' onClick={this.props.pongHandle}/>
				</CSSTransition>
				{animSpeech && <div key='IaghSpeach' className={theme['oval-speech-border']}>{iaghSpeech}</div>}
			</div>
		);
	}
}