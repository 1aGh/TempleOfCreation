import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as reducer from 'redux/reducer';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import theme from './PortfolioTheme.js';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import { Scrollbars } from 'react-custom-scrollbars';
import PortfolioPage from './PortfolioPage';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index.js';

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
			filter: 'all',
		};
	}

	getMasonry = () => {
		const {classes, portfolio} = this.props;
		let masonry = [];
		portfolio.map((obj, i) => {
			if ((obj.category === this.state.filter) || this.state.filter === 'all') {
				let height = i % 2 === 0 ? Math.floor(Math.random() * (200 + 1) + 400) : Math.floor(Math.random() * (200 + 1) + 200);
				let id = obj.id;
				let mainImg = id+'_1.jpg';
				let title = obj.title;
				let category = obj.category;
				let year = obj.year;
				let image = '/api/store/images/'+id+'/'+mainImg;
				masonry.push(
					<XBlock key={id+masonry.length} width={2}>
						<Zoom in={true} style={{transitionDelay: i*20}}>
							<div className={classes.masonryContainer} style={{height: `${height}px`}} onClick={this.openDialog.bind(this, obj, i)}>
								<div style={{height: '100%', width: '100%', background: 'url('+image+') center/cover'}}/>
								<div className={classes.infoHover}>{title}<br/>{category}<br/>{year}</div>
							</div>
						</Zoom>
					</XBlock>
				);
			}
		});
		return masonry;
	}

	transition = (props) => {
		return <Slide direction="up" {...props} />;
	}

	openDialog = (obj, i) => {
		this.setState({dialog: true, project: obj, index: i});
		this.props.dispatch(reducer.getFolder(obj.id));
	}

	handleClose = () => {
		this.setState({dialog: false, project: ''});
	}

	filter = (type) => {
		this.setState({filter: type});
	}

	render() {
		const {classes, portfolio} = this.props;
		const {dialog, project, filter} = this.state;

		let filterArray = ['all', 'Branding', 'Grafika', 'Web', 'Foto', 'Industrial design', 'Product design'];
		let filterContent = [];

		filterArray.map((k, i) => {
			let title = k === 'all' ? 'Zobrazit vše' : k;
			filterContent.push(
				<div key={k+filterContent} className={classes.filterBtn + ' ' + (k === filter ? classes.fSelected : '')} onClick={this.filter.bind(this, k)}>{title}</div>
			);
			if (i < filterArray.length-1) {
				filterContent.push(<div key={i+filterContent} className={classes.divider}>/</div>);
			}
		});

		let masonry = this.getMasonry();

		return (
			<div className={classes.pageWrapper}>
				<div className={classes.dialogBar}>
					<div className={classes.title}>PORTFOLIO</div>
				</div>
				<div className={classes.filter}>
					{filterContent}
				</div>
				<Scrollbars>
					<XMasonry
						responsive={true}
						smartUpdate={true}
						>
						{masonry}
					</XMasonry>
					<Dialog
						fullScreen
						open={dialog}
						onClose={this.handleClose}
						TransitionComponent={this.transition}
						>
							<PortfolioPage project={project} handleClose={this.handleClose}/>
						</Dialog>
				</Scrollbars>
			</div>
		);
	}
}