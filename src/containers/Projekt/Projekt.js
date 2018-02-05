import React, { Component } from 'react';
import theme from './Projekt.scss';
import Link from 'react-router-dom/Link';

export default class Projekt extends Component {
	render() {

		return (
			<div className={theme.testWrapper}>
				Projekt
				<Link to="/">Show sidebar</Link>
			</div>
		);
	}
}