import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import theme from './App.scss';

import Home from 'Home/Home';
import Test from 'Test/Test';

export default class App extends Component {
	render() {
		// const { children } = this.props;

		return (
			<div className={theme.main}>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/test' component={Test}/>
				</Switch>
			</div>
		);
	}
}