import React, { Component } from 'react';
import theme from './Test.scss';
import Link from 'react-router-dom/Link';

export default class App extends Component {
	render() {

		return (
			<div className={theme.testWrapper}>
				Test
				<Link to="/">Show sidebar</Link>
			</div>
		);
	}
}