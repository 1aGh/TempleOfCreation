import React, { Component } from 'react';
import { Link } from 'react-router';
import theme from './App.scss';

export default class App extends Component {
	render() {
		// const { children } = this.props;

		return (
			<div className={theme.appWrapper}>
				{/* <Link to='/'>Home</Link> */}
				{/* <Link to='/about'>About</Link> */}
				Hello
				{/* { children } */}
			</div>
		);
	}
}