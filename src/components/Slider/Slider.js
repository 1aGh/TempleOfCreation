import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as reducer from 'redux/reducer';
import theme from './SliderTheme.js';
import animation from 'App/RouteAnimation.scss';
import { withStyles } from 'material-ui/styles';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Left from 'Icons/Left';
import Right from 'Icons/Right';

@withStyles(theme)

export default class Slider extends Component {
	static propTypes = {
		classes: PropTypes.any,
		type: PropTypes.any,
		src: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			index: 0,
			next: true,
		};
	}

	sliderHandle = (type) => {
		const {index} = this.state;
		const {src} = this.props;
		let i = 0;
		if (src) {
			if (type === 'next') {
				if (index === src.length-1) {
					i = 0;
				} else {
					i = index+1;
				}
			} else {
				if (index === 0) {
					i = src.length-1;
				} else {
					i = index-1;
				}
			}
		}
		this.setState({index: i, next: type === 'next' ? true : false});
	}

	render() {
		const {classes, type, src} = this.props;
		const {next} = this.state;
console.log('PROPSS::: ', this.props);
		let carousel = [];
		let counter = src && src.length ? src.length : 0;
		if (type === 'img') {
			src.map((img, index) => {
				carousel.push(
					<CSSTransition
						key={index}
						timeout={500}
						classNames={{
							appear: animation[next ? 'fromRight' : 'fromLeft'],
							appearActive: animation[next ? 'fromRightActive' : 'fromLeftActive'],
							enter: animation[next ? 'fromRight' : 'fromLeft'],
							enterActive: animation[next ? 'fromRightActive' : 'fromLeftActive'],
							exit: animation[next ? 'toLeft' : 'toRight'],
							exitActive: animation[next ? 'toLeftActive' : 'toRightActive'],
						}}
						>
							<div style={{height: '100%', width: '100%', background: 'url('+img+') center/cover'}}/>
						</CSSTransition>
				);
			});
		}
		return (
			<div className={classes.slider}>
				<div className={classes.backward} onClick={this.sliderHandle.bind(this, 'back')}><Left className={classes.arrow}/></div>
				<TransitionGroup className={classes.transition}>
					{carousel.map((item, index) => {
						if (index === this.state.index) {
							return item;
						}
					})}
				</TransitionGroup>
				<div className={classes.forward} onClick={this.sliderHandle.bind(this, 'next')}><Right className={classes.arrow}/></div>
				<div className={classes.counter}>
					<div className={classes.counterIndex}>{this.state.index+1}</div>
					<div className={classes.counterLine}>/</div>
					<div className={classes.counterLength}>{counter}</div>
				</div>
			</div>
		);
	}
}