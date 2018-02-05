import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './Menu.scss';
import Link from 'react-router-dom/Link';

import MenuIcon from 'react-icons/lib/md/crop-free';

export default class Menu extends Component {
	static propTypes = {
		location: PropTypes.any,
	};

	render() {
		const {location} = this.props;
console.log('LOCATION: ', location);
		let content = [];

		if (location) {
			if (location.pathname === '/') {
				content.push(<Link key={'link'+content.length} to='/kontakty' className={theme.link + ' ' + theme.kontaktyBtn}>KONTAKTY</Link>);
				content.push(<Link key={'link'+content.length} to='/projekt' className={theme.link + ' ' + theme.projektBtn}><div className={theme.rotateRt}>PROJEKT</div></Link>);
				content.push(<Link key={'link'+content.length} to='/menu' className={theme.link + ' ' + theme.menuBtn}><MenuIcon/></Link>);
				content.push(<Link key={'link'+content.length} to='/portfolio' className={theme.link + ' ' + theme.portfolioBtn}><div className={theme.rotateLf}>PORTFOLIO</div></Link>);
			}
		}

		return (
			<section>
				{content}
			</section>
		);
	}
}