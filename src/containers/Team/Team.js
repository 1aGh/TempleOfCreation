import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './TeamTheme.js';
import { withStyles } from 'material-ui/styles';

import Logo from 'Icons/Logo';

@withStyles(theme)

export default class Team extends Component {
	static propTypes = {
		classes: PropTypes.any,
	};

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.kontaktyWrapper}>
				<div className={classes.row}>
					<div className={classes.logo}><Logo/></div>
				</div>
			</div>
		);
	}
}