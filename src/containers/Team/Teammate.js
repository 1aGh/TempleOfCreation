import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import theme from './TeamTheme.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

@withStyles(theme)

export default class Team extends Component {
	static propTypes = {
		classes: PropTypes.any,
		teammate: PropTypes.any,
	};

	render() {
		const {classes, teammate} = this.props;

		return (
			<div className={classes.kontaktyWrapper}>
				<div className={classes.dialogBar}>
					<div className={classes.title}>TEAM</div>
				</div>
				<Grid container className={classes.main} spacing={24} direction={'column'}>
					<Grid container spacing={24}>
						<Grid item xs={4}></Grid>
						<Grid item xs={6}></Grid>
					</Grid>
					<Grid container spacing={0}>
						<Grid item xs={3}></Grid>
						<Grid item xs={9}></Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}