import React, { Component } from 'react';
import theme from './Portfolio.scss';
import Link from 'react-router-dom/Link';

export default class Portfolio extends Component {
	render() {

		return (
			<div className={theme.testWrapper}>
				Portfolio
				<Link to="/">Show sidebar</Link>
			</div>
		);
	}
}