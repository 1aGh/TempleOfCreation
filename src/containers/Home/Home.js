import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './Home.scss';

import LogoIcon from 'Icons/Logo';

export default class App extends Component {
	static propTypes = {
	};

	constructor(props){
		super(props);
		this.state = {
			x: 0,
			y: 0,
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

	render() {
		return (
			<div className={theme.homeWrapper} onMouseMove={this.mouseHandle.bind(this)}>
				<div className={theme.homeContainer}>
					<div className={theme.animContainer} ref={(div) => { this.animContainer = div; }}>
						<LogoIcon className={theme.logo}/>
						<div className={theme.title}>Temple of creation comming soon</div>
					</div>
				</div>
			</div>
		);
	}
}