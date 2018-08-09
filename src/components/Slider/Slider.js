import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as reducer from 'redux/reducer';
import theme from './SliderTheme.js';
import animation from 'App/RouteAnimation.scss';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Left from 'Icons/Left';
import Right from 'Icons/Right';

@withStyles(theme)

export default class Slider extends Component {
	static propTypes = {
		classes: PropTypes.any,
		type: PropTypes.any,
		src: PropTypes.any,
		id: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			index: 0,
			next: true,
			images: [],
			loaded: [],
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

	loadEnd = (id, load) => {
		let images = [...this.state.images];
		let loaded = [...this.state.loaded];
		if (load) {
			loaded.push(id);
			this.setState({loaded: loaded});
		} else if (!load) {
			images.push(id);
			this.setState({images: images});
		}
	}

	render() {
		const {classes, type, src, id} = this.props;
		const {next, images, loaded} = this.state;
		let carousel = [];
		let counter = src && src.length ? src.length : 0;
		if (type === 'img') {
			src.map((img, index) => {
				let load = images.indexOf(img) > -1 ? true : false;
				let showBar = loaded.indexOf(img) > -1 ? false : true;
				let image;
				if (load) {
					image = '/api/store/images/'+id+'/'+img;
				} else {
					image = '/api/store/images/'+id+'/'+img+'?format=jpeg&width=100';
				}
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
							<div>
								{showBar && <LinearProgress variant="query" />}
								<img src={image} onLoad={this.loadEnd.bind(this, img, load)} className={classes.thumbnail}/>
							</div>
						</CSSTransition>
				);
			});
		}
		return (
			<div className={classes.slider}>
				<div className={classes.arrBtnLeft} onClick={this.sliderHandle.bind(this, 'back')}>
					<div className={classes.backward}><Left className={classes.arrow}/></div>
				</div>
				<TransitionGroup className={classes.transition}>
					{carousel.map((item, index) => {
						if (index === this.state.index) {
							return item;
						}
					})}
				</TransitionGroup>
				<div className={classes.arrBtnRight} onClick={this.sliderHandle.bind(this, 'next')}>
					<div className={classes.forward}><Right className={classes.arrow}/></div>
				</div>
				<div className={classes.counter}>
					<div className={classes.counterIndex}>{this.state.index+1}</div>
					<div className={classes.counterLine}>/</div>
					<div className={classes.counterLength}>{counter}</div>
				</div>
			</div>
		);
	}
}