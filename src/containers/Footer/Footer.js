import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router-dom/Link';
import theme from './FooterTheme.js';
import { withStyles } from '@material-ui/core/styles';
import * as reducer from 'redux/reducer';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import MiniLogo from 'Icons/MiniLogo';
import MenuIcon from 'Icons/MenuIcon';
import FacebookIcon from 'Icons/Facebook';
import InstagramIcon from 'Icons/Instagram';
import MailIcon from 'Icons/Mail';

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
						<div className={classes.copyright}>{'\u00A9'+'2018'} <br/>Temple of Creation</div>
						<a className={classes.socialBtn} href="https://www.facebook.com/templeofcreation" target="blank"><FacebookIcon className={classes.icn}/></a>
						<a className={classes.socialBtn} href="https://www.instagram.com/temple_of_creation/" target="blank"><InstagramIcon className={classes.icn}/></a>
						<Link className={classes.socialBtn} to="/kontakty"><MailIcon className={classes.icn}/></Link>
						<div className={classes.social}>
						</div>
					</div>
					<div className={classes.location}>{actualLocation}</div>
				</div>
				<div className={classes.menuContainer} style={{display: this.state.menu ? 'flex' : 'none'}}>
					<ul className={classes.menu}>
						<li><Link to='/' onClick={this.openMenu} className={classes.link}>HOME</Link></li>
						<li><Link to='/portfolio' onClick={this.openMenu} className={classes.link}>PORTFOLIO</Link></li>
						<li><Link to='/kontakty' onClick={this.openMenu} className={classes.link}>KONTAKT</Link></li>
						<li><Link to='/projekt' onClick={this.openMenu} className={classes.link}>PROJEKT</Link></li>
					</ul>
				</div>
			</Collapse>
		);
	}
}