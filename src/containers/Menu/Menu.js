import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './Menu.scss';
import Link from 'react-router-dom/Link';

import MenuIcon from 'react-icons/lib/md/crop-free';
import Down from 'react-icons/lib/md/keyboard-arrow-down';
import Up from 'react-icons/lib/md/keyboard-arrow-up';
import Left from 'react-icons/lib/md/keyboard-arrow-left';
import Right from 'react-icons/lib/md/keyboard-arrow-right';

export default class Menu extends Component {
	static propTypes = {
		location: PropTypes.any,
	};

	render() {
		const {location} = this.props;
console.log('LOCATION: ', location);
		let content = [];
		let menu = [];
		let path = location.pathname;

		if (location) {
			if (path === '/') {
				menu = ['kontakty', 'projekt', 'menu', 'portfolio'];
			} else if (path === '/projekt') {
				menu = ['backLeft', 'menu'];
			} else if (path === '/portfolio') {
				menu = ['backRight', 'menu'];
			} else if (path === '/kontakty') {
				menu = ['backDown', 'menu'];
			}
			menu.map((k) => {
				let label;
				let href = k;
				let position;
				switch (k) {
					case 'menu':
						label = <div className={theme.label}><MenuIcon className={theme.arrowActive}/></div>;
						position = path === '/kontakty' ? 'top' : 'bottom';
						break;
					case 'projekt':
						label = <div className={theme.label + ' ' + theme.rotateRt}><Up className={theme.arrow}/>{k.toUpperCase()}</div>;
						position = 'right';
						break;
					case 'portfolio':
						label = <div className={theme.label + ' ' +  theme.rotateLf}><Up className={theme.arrow}/>{k.toUpperCase()}</div>;
						position = 'left';
						break;
					case 'kontakty':
						label = <div className={theme.label}><Up className={theme.arrow}/>{k.toUpperCase()}</div>;
						position = 'top';
						break;
					case 'backLeft':
						label = <div className={theme.label}><Left className={theme.arrowActive}/></div>;
						href = '';
						position = 'left';
						break;
					case 'backRight':
						label = <div className={theme.label}><Right className={theme.arrowActive}/></div>;
						href = '';
						position = 'right';
						break;
					case 'backDown':
						label = <div className={theme.label}><Down className={theme.arrowActive}/></div>;
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
						className={theme.link + ' ' + theme[position+'Btn']}>
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