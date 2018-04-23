import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router-dom/Link';
import theme from './HomeTheme.js';
import { withStyles } from 'material-ui/styles';
import * as reducer from 'redux/reducer';
import Typography from 'material-ui/Typography';

import LogoIcon from 'Icons/Logo';

@connect(
		state => ({
			main: state.main,
		})
)

@withStyles(theme)

export default class Home extends Component {
	static propTypes = {
		dispatch: PropTypes.any,
		classes: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			x: 0,
			y: 0,
		};
	}

	testHandle = () => {
		console.log('CLICK');
		this.props.dispatch(reducer.test('hello'));
	}

	mouseHandle = (e) => {
		if (!this.state.pong) {
			this.setState({x: e.pageX, y: e.pageY});
			this.moveDiv();
		}
	}

	moveDiv = () => {
		let [moveX, moveY] = [(this.state.x / -20), (this.state.y / -40)];
		let animDiv = this.animContainer;

		animDiv.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
		animDiv.style.transition = 'cubic-bezier(0.4, 0, 0.2, 1)';
	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.homeWrapper} onMouseMove={this.mouseHandle.bind(this)}>
				<div className={classes.homeContainer}>
					<div className={classes.animContainer} ref={(div) => { this.animContainer = div; }}>
						<LogoIcon className={classes.logo} onClick={this.testHandle}/>
						<Typography>Temple of creation comming soon</Typography>
					</div>
				</div>
			</div>
		);
	}
}