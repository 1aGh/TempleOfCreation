import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './KontaktyTheme.js';
import { withStyles } from '@material-ui/core/styles';

import Logo from 'Icons/Logo';

@withStyles(theme)

export default class Kontakty extends Component {
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