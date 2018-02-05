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

		if (location) {
			if (location.pathname === '/') {
				menu = ['kontakty', 'projekt', 'menu', 'portfolio'];
			}
			menu.map((k) => {
				let label;
				let arrow;
				switch (k) {
					case 'menu':
						label = <MenuIcon/>;
						break;
					case 'projekt':
						label = <div className={theme.label + ' ' + theme.rotateRt}><Up className={theme.arrow}/>{k.toUpperCase()}</div>;
						break;
					case 'portfolio':
						label = <div className={theme.label + ' ' +  theme.rotateLf}><Up className={theme.arrow}/>{k.toUpperCase()}</div>;
						break;
					case 'kontakty':
						label = <div className={theme.label}><Up className={theme.arrow}/>{k.toUpperCase()}</div>;
						break;
					default:
						label = k.toUpperCase();
				}
				content.push(
					<Link
						key={k+content.length}
						to={'/'+k}
						className={theme.link + ' ' + theme[k+'Btn']}>
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