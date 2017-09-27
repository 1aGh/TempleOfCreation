import React, { Component } from 'react';
import theme from './Home.scss';

export default class App extends Component {
	render() {

		return (
			<div className={theme.homeWrapper}>
				Hello world
			</div>
		);
	}
}