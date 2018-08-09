import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as reducer from 'redux/reducer';
import theme from './PortfolioPageTheme.js';
import { withStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'Slider/Slider';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import CancelIcn from 'Icons/Close';

@withStyles(theme)

@connect(
		state => ({
			portfolioImg: state.main.portfolioImg,
			portfolio: state.main.portfolio,
		})
)

export default class PortfolioPage extends Component {
	static propTypes = {
		classes: PropTypes.any,
		portfolio: PropTypes.any,
		portfolioImg: PropTypes.any,
		dispatch: PropTypes.any,
		match: PropTypes.any,
		history: PropTypes.any,
	};

	componentDidMount = () => {
		if (this.props.portfolio.find(({ id }) => id === this.props.match.params.id)) {
			this.props.dispatch(reducer.getFolder(this.props.match.params.id));
		}
	}

	transition = (props) => {
		return <Slide direction="up" {...props} />;
	}

	goBack = () => {
		this.props.history.push('/portfolio');
	}

	render() {
		const {classes, portfolio, portfolioImg, match} = this.props;
		let project = portfolio.find(({ id }) => id === match.params.id);
		let title = project && project.title ? project.title : '';
		let autor = project && project.autor ? project.autor : '';
		let year = project && project.year ? project.year : '';
		let description = project && project.description ? project.description : '';
		let id = project && project.id ? project.id : '';
		let type = project && project.type ? project.type : '';
		let photo = [];
		let video;
		let slider;
		let content;
		let dialog = match.params.id === id ? true : false;

		let src = type === 'img' ? (portfolioImg && portfolioImg[id] ? portfolioImg[id] : []) : video;
		if (project) {
			slider = (
				<Slider type={type} id={id} src={src}/>
			);
		} else {
			slider = (<div>Nothing found</div>);
		}

		content = (
			<div className={classes.dialogWrapper} style={{backgroundImage: 'url(/api/store/static/pattern.svg)'}}>
				<div className={classes.dialogBar}>
					<div className={classes.title}>{title}</div>
					<IconButton className={classes.cancelBtn} onClick={this.goBack}>
						<CancelIcn className={classes.closeIcn}/>
					</IconButton>
				</div>
				{slider}
			</div>
		);

		return (
			<Dialog
				fullScreen
				open={dialog}
				onClose={this.goBack}
				TransitionComponent={this.transition}
				>
				{content}
			</Dialog>
		);
	}
}