import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router-dom/Link';
import theme from './FooterTheme.js';
import { withStyles } from 'material-ui/styles';
import * as reducer from 'redux/reducer';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import MiniLogo from 'Icons/MiniLogo';
import MenuIcon from 'Icons/MenuIcon';

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
		location: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			menu: false,
		};
	}

	testHandle = () => {
		console.log('CLICK');
		this.props.dispatch(reducer.test('hello'));
	}

	openMenu = () => {
		this.setState({menu: !this.state.menu});
	}

	render() {
		const {classes, location} = this.props;

		let actualLocation = location && location.pathname ? location.pathname : '';

		return (
			<Collapse classes={{container: classes.footerWrapper, entered: classes.footerWrapperEntered, wrapperInner: classes.footerWrapperInner, wrapper: classes.muiWrapper}} in={this.state.menu}>
				<div className={classes.footerContainer}>
					<div className={classes.btn} onClick={this.openMenu}>
						<MiniLogo className={classes.iconLogo}/>
						<MenuIcon className={classes.iconMenu}/>
					</div>
					<div className={classes.footer}>
						<div className={classes.copyright}>2018 <br/>Temple of Creation</div>
						<div className={classes.social}></div>
					</div>
					<div className={classes.location}>{actualLocation}</div>
				</div>
				<div className={classes.menuContainer} style={{display: this.state.menu ? 'flex' : 'none'}}>
					<ul className={classes.menu}>
						<li><Link to='/' onClick={this.openMenu} className={classes.link}>HOME</Link></li>
						<li><Link to='/portfolio' onClick={this.openMenu} className={classes.link}>PORTFOLIO</Link></li>
						<li><Link to='/kontakt' onClick={this.openMenu} className={classes.link}>KONTAKT</Link></li>
						<li><Link to='/projekt' onClick={this.openMenu} className={classes.link}>PROJEKT</Link></li>
					</ul>
				</div>
			</Collapse>
		);
	}
}