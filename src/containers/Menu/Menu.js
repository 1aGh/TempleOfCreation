import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './MenuTheme.js';
import { withStyles } from 'material-ui/styles';
import Link from 'react-router-dom/Link';
import Tooltip from 'material-ui/Tooltip';

import MenuIcon from 'react-icons/lib/md/crop-free';
import Down from 'react-icons/lib/md/keyboard-arrow-down';
import Up from 'react-icons/lib/md/keyboard-arrow-up';
import Left from 'react-icons/lib/md/keyboard-arrow-left';
import Right from 'react-icons/lib/md/keyboard-arrow-right';

@withStyles(theme)

export default class Menu extends Component {
	static propTypes = {
		location: PropTypes.any,
		classes: PropTypes.any,
	};

	render() {
		const {location, classes} = this.props;
		let content = [];
		let menu = [];
		let path = location.pathname;

		if (location) {
			if (path === '/') {
				menu = ['kontakty', 'projekt', 'portfolio'];
			} else if (path === '/projekt') {
				menu = ['backLeft'];
			} else if (path === '/portfolio') {
				menu = ['backRight'];
			} else if (path === '/kontakty') {
				menu = ['backDown'];
			}
			menu.map((k) => {
				let label;
				let href = k;
				let position;
				switch (k) {
					case 'menu':
						label = <Tooltip id="tooltip-icon" title="Menu"><div className={classes.label}><MenuIcon className={classes.arrowActive}/></div></Tooltip>;
						position = path === '/kontakty' ? 'top' : 'bottom';
						break;
					case 'projekt':
						label = <div className={classes.label + ' ' + classes.rotateRt}><Up className={classes.arrow}/>{k.toUpperCase()}</div>;
						position = 'right';
						break;
					case 'portfolio':
						label = <div className={classes.label + ' ' +  classes.rotateLf}><Up className={classes.arrow}/>{k.toUpperCase()}</div>;
						position = 'left';
						break;
					case 'kontakty':
						label = <div className={classes.label}><Up className={classes.arrow}/>{k.toUpperCase()}</div>;
						position = 'top';
						break;
					case 'backLeft':
						label = <Tooltip id="tooltip-back" title="Back"><div className={classes.label}><Left className={classes.arrowActive}/></div></Tooltip>;
						href = '';
						position = 'left';
						break;
					case 'backRight':
						label = <Tooltip id="tooltip-back" title="Back"><div className={classes.label}><Right className={classes.arrowActive}/></div></Tooltip>;
						href = '';
						position = 'right';
						break;
					case 'backDown':
						label = <Tooltip id="tooltip-back" title="Back"><div className={classes.label}><Down className={classes.arrowActive}/></div></Tooltip>;
						href = '';
						position = 'bottom';
						break;
					default:
						label = k.toUpperCase();
				}
				content.push(
					<Link
						key={k+content.length}
						to={'/'+href}
						className={classes.link + ' ' + classes[position+'Btn']}>
						{label}
					</Link>
				);
			});
		}

		return (
			<section>
				{content}
			</section>
		);
	}
}