import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import theme from './TeamTheme.js';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Teammate from './Teammate';

import Logo from 'Icons/Logo';

@connect(
		state => ({
			team: state.main.team,
		})
)

@withStyles(theme)

export default class Team extends Component {
	static propTypes = {
		classes: PropTypes.any,
		team: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			dialog: false,
			teammate: '',
			filter: 'all',
		};
	}

	openDialog = (obj, i) => {
		this.setState({dialog: true, teammate: obj});
	}

	handleClose = () => {
		this.setState({dialog: false, teammate: ''});
	}

	transition = (props) => {
		return <Slide direction="down" {...props} />;
	}

	render() {
		const {classes, team} = this.props;
		const {dialog} = this.state;

		let teamContent = [];

		Object.keys(team).map((k) => {
			let item = team[k];
			let img = '/api/store/static/'+k+'.png';
			let name = item.name;
			let age = () => {
				let birth = new Date(item.age);
				let cur = new Date();
				return cur.getFullYear() - birth.getFullYear();
			};
			let prof = item.prof;

			teamContent.push(
				<Grid key={k+teamContent.length} item xs={2}>
					<div className={classes.teammate} onClick={this.openDialog.bind(this, item)}>
						<div className={classes.photo} style={{backgroundImage: 'url('+img+')'}}/>
						<div>{name}</div>
						<div>{age()+' let'}</div>
						<div className={classes.divider}>{'/'}</div>
						<div className={classes.prof}>{prof}</div>
					</div>
				</Grid>
			);
		});

		return (
			<div className={classes.kontaktyWrapper}>
				<div className={classes.dialogBar}>
					<div className={classes.title}>TEAM</div>
				</div>
				<Grid container className={classes.menu} spacing={40} justify={'center'} alignContent={'center'}>
					{teamContent}
				</Grid>
				<Dialog
					fullScreen
					open={dialog}
					onClose={this.handleClose}
					TransitionComponent={this.transition}
					>
						<Teammate/>
					</Dialog>
			</div>
		);
	}
}