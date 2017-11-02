import React, { Component } from 'react';
import theme from './Home.scss';

import LogoIcon from 'Icons/Logo';
import IaghIcon from 'Icons/Iagh';

import Pong from 'Pong/Pong';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			x: 0,
			y: 0,
			pong: false,
		};
	}

	mouseHandle = (e) => {
		if (!this.state.pong) {
			this.setState({x: e.pageX, y: e.pageY});
			this.moveDiv();
		}
	}

	moveDiv = () => {
		let [moveX, moveY] = [(this.state.x / -40), (this.state.y / -60)];
		let animDiv = this.animContainer;

		animDiv.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
		animDiv.style.transition = 'cubic-bezier(0.4, 0, 0.2, 1)';
	}

	pongHandle = () => {
		this.setState({pong: !this.state.pong});
	}

	render() {
		const { pong } = this.state;

		return (
			<div className={theme.homeWrapper} onMouseMove={this.mouseHandle.bind(this)}>

				{pong && <Pong close={this.pongHandle}/>}
				{!pong && <div className={theme.homeContainer}>
					<div className={theme.pongBtn} onClick={this.pongHandle}></div>
					<IaghIcon className={theme.iagh}/>
					<div className={theme.animContainer} ref={(div) => { this.animContainer = div; }}>
						<LogoIcon className={theme.logo}/>
						<div className={theme.title}>Temple of creation comming soon</div>
					</div>
				</div>}
			</div>
		);
	}
}