import React, { Component } from 'react';
import theme from './Test.scss';

export default class App extends Component {
	render() {

		return (
			<div className={theme.testWrapper}>
				Test
			</div>
		);
	}
}