import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import theme from './PortfolioTheme.js';
import MasonryLayout from 'react-masonry-layout';
import Zoom from 'material-ui/transitions/Zoom';
import Slide from 'material-ui/transitions/Slide';
import Dialog from 'material-ui/Dialog';
import { Scrollbars } from 'react-custom-scrollbars';
import PortfolioPage from './PortfolioPage';

@connect(
		state => ({
			portfolio: state.main.portfolio,
		})
)

@withStyles(theme)

export default class Portfolio extends Component {
	static propTypes = {
		dispatch: PropTypes.any,
		portfolio: PropTypes.any,
		classes: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			dialog: false,
			project: '',
		};
	}

	getMasonry = () => {
		const {classes, portfolio} = this.props;
		let masonry = [];
		portfolio.map((obj, i) => {
			// let height = i % 2 === 0 ? Math.floor(Math.random() * (200 + 1) + 300) : Math.floor(Math.random() * (200 + 1) + 100);

			let height = i % 2 === 0 ? 200 : 300;
			let id = obj.id;
			let mainImg = id+'_1.jpeg';
			let title = obj.title;
			let category = obj.category;
			let year = obj.year;
			let image = '/store/images/'+id+'/'+mainImg;
			masonry.push(
				<Zoom key={id+masonry.length} in={true} style={{transitionDelay: i*20}}>
					<div className={classes.masonryContainer} style={{height: `${height}px`}} onClick={this.openDialog.bind(this, obj, i)}>
						<div style={{height: '100%', width: '100%', background: 'url('+image+') center/cover'}}/>
						<div className={classes.infoHover}>{title}<br/>{category}<br/>{year}</div>
					</div>
				</Zoom>
			);
		});
		return masonry;
	}

	transition = (props) => {
		return <Slide direction="up" {...props} />;
	}

	openDialog = (obj, i) => {
		this.setState({dialog: true, project: obj, index: i});
	}

	handleClose = () => {
		this.setState({dialog: false, project: ''});
	}

	render() {
		const {classes, portfolio} = this.props;
		const {dialog, project} = this.state;

		return (
			<Scrollbars>
				<div className={classes.pageWrapper}>
						<MasonryLayout
							id="masonry-layout"
							infiniteScroll={this.loadItems}
							sizes = {[
								{ columns: 1, gutter: 10 },
								{ mq: '768px', columns: 2, gutter: 15 },
								{ mq: '1024px', columns: 3, gutter: 20 },
								{ mq: '1440px', columns: 4, gutter: 20 },
								{ mq: '1900px', columns: 5, gutter: 20 }
							]}>
							{this.getMasonry()}
						</MasonryLayout>
						<Dialog
							fullScreen
							open={dialog}
							onClose={this.handleClose}
							transition={this.transition}
							>
								<PortfolioPage project={project} handleClose={this.handleClose}/>
							</Dialog>
				</div>
			</Scrollbars>
		);
	}
}