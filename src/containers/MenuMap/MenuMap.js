import React, { Component } from 'react';
import theme from './MenuMap.scss';
import Link from 'react-router-dom/Link';

export default class MenuMap extends Component {
	render() {

		return (
			<div className={theme.MenuMapWrapper}>
				Menu
				<Link to="/">Show sidebar</Link>
			</div>
		);
	}
}