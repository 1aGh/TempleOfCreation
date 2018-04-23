import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router-dom/Link';
import theme from './FooterTheme.js';
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

export default class Footer extends Component {
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

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.footerWrapper}>
			</div>
		);
	}
}