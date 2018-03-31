import React, { Component } from 'react';
import theme from './MenuMap.scss';
import Link from 'react-router-dom/Link';

export default class MenuMap extends Component {
	render() {

		return (
			<div className={theme.menuMapWrapper}>
				<div className={theme.menuMapContainer}>
					<Link to='/' className={theme.homeContainer}>HOME</Link>
					<Link to='/portfolio' className={theme.portfolioContainer}>PORTFOLIO</Link>
					<Link to='/kontakty' className={theme.kontaktyContainer}>KONTAKTY</Link>
					<Link to='/projekt' className={theme.projektContainer}>PROJEKT</Link>
				</div>
			</div>
		);
	}
}