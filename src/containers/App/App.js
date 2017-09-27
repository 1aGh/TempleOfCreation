import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import theme from './App.scss';

import Home from 'Home/Home';
import Test from 'Test/Test';

export default class App extends Component {
	render() {
		// const { children } = this.props;

		return (
			<div>
				<div>
					<nav>
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/test'>Test</Link></li>
						</ul>
					</nav>
				</div>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/test' component={Test}/>
				</Switch>
			</div>
		);
	}
}