import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router-dom/Link';
import theme from './HomeTheme.js';
import { withStyles } from '@material-ui/core/styles';
import * as reducer from 'redux/reducer';
import Typography from '@material-ui/core/Typography';

import LogoIcon from 'Icons/Logo';
import PinIcon from 'Icons/PinIcon';
import ArrowFIcon from 'Icons/ArrowF';

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

	// mouseHandle = (e) => {
	// 	if (!this.state.pong) {
	// 		this.setState({x: e.pageX, y: e.pageY});
	// 		this.moveDiv();
	// 	}
	// }

	moveDiv = () => {
		let [moveX, moveY] = [(this.state.x / -20), (this.state.y / -40)];
		let animDiv = this.animContainer;

		animDiv.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
		animDiv.style.transition = 'cubic-bezier(0.4, 0, 0.2, 1)';
	}

	mouseEnter = (type) => {
		if (!this.state[type]) {
			this.setState({[type]: true});
			setTimeout(() => { this.setState({[type]: false}); }, 2000);
		}
	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.homeWrapper}
				// onMouseMove={this.mouseHandle.bind(this)}
				>
				<div className={classes.homeContainer}>
					<div className={classes.animContainer + ' ' + classes.logoContainer} ref={(div) => { this.animContainer = div; }}>
						<LogoIcon className={classes.logo} onClick={this.testHandle}/>
						<Typography variant='caption' color='primary'>Temple of Creation</Typography>
					</div>
					<div className={classes.infoWrapper}>
						{/* <Link to={'/'} className={classes.infoContainer + ' ' + (this.state.pujcovna ? classes.animInfoContainer : '')} onMouseEnter={this.mouseEnter.bind(this,'pujcovna')}>
							<PinIcon className={classes.pinIcon}/>
							<Typography align='center'>Půjčovna</Typography>
							<div className={classes.animIconContainer}>
								<div className={classes.animIcon} style={{backgroundImage: 'url(\'/store/static/camera_sprite.png\')'}}/>
							</div>
						</Link> */}
						<Link to={'/kontakty'} className={classes.infoContainer + ' ' + (this.state.kontakt ? classes.animInfoContainer : '')} onMouseEnter={this.mouseEnter.bind(this,'kontakt')}>
							<PinIcon className={classes.pinIcon}/>
							<Typography align='center'>Kontakty</Typography>
							<div className={classes.animIconContainer}>
								<div className={classes.animIcon} style={{backgroundImage: 'url(\'/store/static/phone_sprite.png\')'}}/>
							</div>
						</Link>
					</div>
				</div>
				<div className={classes.introduction}>
					<div className={classes.startTitle}>{'Začni zde'}</div>
					<ArrowFIcon className={classes.arrow}/>
				</div>
			</div>
		);
	}
}