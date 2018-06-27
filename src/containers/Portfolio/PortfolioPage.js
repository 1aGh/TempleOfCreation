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

import CancelIcn from 'Icons/Close';

@withStyles(theme)

@connect(
		state => ({
			portfolioImg: state.main.portfolioImg,
		})
)

export default class PortfolioPage extends Component {
	static propTypes = {
		classes: PropTypes.any,
		project: PropTypes.any,
		handleClose: PropTypes.any,
		portfolioImg: PropTypes.any,
		dispatch: PropTypes.any,
	};

	render() {
		const {classes, project, handleClose, portfolioImg} = this.props;

		let title = project && project.title ? project.title : '';
		let autor = project && project.autor ? project.autor : '';
		let year = project && project.year ? project.year : '';
		let description = project && project.description ? project.description : '';
		let id = project && project.id ? project.id : '';
		let type = project && project.type ? project.type : '';
		let photo = [];
		let video;
		let slider;

		// if (portfolioImg && portfolioImg[id]) {
		// 	portfolioImg[id].map((img, index) => {
		// 		photo.push(
		// 			<div key={id+index} className={classes.image}>
		// 				<img src={img}/>
		// 			</div>
		// 		);
		// 	});
		// }

		let settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		let src = type === 'img' ? (portfolioImg && portfolioImg[id] ? portfolioImg[id] : []) : video;
		slider = (
			<Slider type={type} id={id} src={src}/>
		);

		return (
			<div className={classes.dialogWrapper} style={{backgroundImage: 'url(/api/store/static/pattern.png)'}}>
				<div className={classes.dialogBar}>
					<div className={classes.title}>{title}</div>
					<IconButton className={classes.cancelBtn} onClick={handleClose}>
						<CancelIcn className={classes.closeIcn}/>
					</IconButton>
				</div>
				{slider}
			</div>
		);
	}
}