import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './MenuTheme.js';
import { withStyles } from 'material-ui/styles';
import Link from 'react-router-dom/Link';
import Tooltip from 'material-ui/Tooltip';

import MenuIcon from 'react-icons/lib/md/crop-free';
import Down from 'Icons/Down';
import Up from 'Icons/Up';
import Left from 'Icons/Left';
import Right from 'Icons/Right';

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
				menu = ['team', 'projekt', 'portfolio'];
			} else if (path === '/projekt') {
				menu = ['backLeft'];
			} else if (path === '/portfolio') {
				menu = ['backRight'];
			} else if (path === '/team') {
				menu = ['backDown'];
			}
			menu.map((k) => {
				let label;
				let href = k;
				let position;
				let icon;
				switch (k) {
					// case 'menu':
					// 	label = <Tooltip id="tooltip-icon" title="Menu"><div className={classes.label}><MenuIcon className={classes.arrowActive}/></div></Tooltip>;
					// 	position = path === '/kontakty' ? 'top' : 'bottom';
					// 	break;
					case 'projekt':
						label = <div className={classes.label + ' ' + classes.rotateRt}>{k.toUpperCase()}</div>;
						icon = <Right className={classes.verArrow} style={{transform: 'translateX(-30px)'}}/>;
						position = 'right';
						break;
					case 'portfolio':
						label = <div className={classes.label + ' ' +  classes.rotateLf}>{k.toUpperCase()}</div>;
						icon = <Left className={classes.verArrow} style={{transform: 'translateX(30px)'}}/>;
						position = 'left';
						break;
					case 'team':
						label = <div className={classes.label}>{k.toUpperCase()}</div>;
						icon = <Up className={classes.horArrow} style={{transform: 'translateY(30px)'}}/>;
						position = 'top';
						break;
					case 'backLeft':
						label = <Tooltip id="tooltip-back" title="Back"><div className={classes.label}><Left className={classes.backVerArrow + ' ' + classes.animBackLeft}/></div></Tooltip>;
						href = '';
						position = 'left';
						break;
					case 'backRight':
						label = <Tooltip id="tooltip-back" title="Back"><div className={classes.label}><Right className={classes.backVerArrow + ' ' + classes.animBackRight}/></div></Tooltip>;
						href = '';
						position = 'right';
						break;
					case 'backDown':
						label = <Tooltip id="tooltip-back" title="Back"><div className={classes.label}><Down className={classes.backHorArrow}/></div></Tooltip>;
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
						{icon}
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