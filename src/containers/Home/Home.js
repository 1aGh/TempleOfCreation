import React, { Component } from 'react';
import theme from './Home.scss';

import LogoIcon from 'Icons/Logo';

export default class App extends Component {
	render() {

		return (
			<div className={theme.homeWrapper}>
				<LogoIcon className={theme.logo}/>
				<div className={theme.title}>Temple of creation comming soon</div>
			</div>
		);
	}
}