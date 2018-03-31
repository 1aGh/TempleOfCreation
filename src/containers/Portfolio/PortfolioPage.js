import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './PortfolioPageThene.js';

export default class PortfolioPage extends Component {
	static propTypes = {
	};

	render() {
		return (
			<div className={theme.testWrapper}>
				Portfolio
				<Link to="/">Show sidebar</Link>
			</div>
		);
	}
}