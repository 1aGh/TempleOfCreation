import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as reducer from 'redux/reducer';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import theme from './PortfolioTheme.js';
import Zoom from '@material-ui/core/Zoom';
import { Scrollbars } from 'react-custom-scrollbars';
import PortfolioPage from './PortfolioPage';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index.js';
import LinearProgress from '@material-ui/core/LinearProgress';

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
		history: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			filter: 'all',
			images: {},
			loaded: [],
		};
	}

	loadEnd = (id, load, height) => {
		let images = {...this.state.images};
		let loaded = [...this.state.loaded];
		if (load) {
			images[id] = height;
			this.setState({images: images});
		} else {
			loaded.push(id);
			this.setState({loaded: loaded});
		}
	}

	getMasonry = () => {
		const {classes, portfolio} = this.props;
		const {images} = this.state;
		let masonry = [];
		portfolio.map((obj, i) => {
			if ((obj.category === this.state.filter) || this.state.filter === 'all') {
				let id = obj.id;
				let height = images[id] ? images[id] : i % 2 === 0 ? Math.floor(Math.random() * (200 + 1) + 400) : Math.floor(Math.random() * (200 + 1) + 200);
				let mainImg = id+'_1.jpg';
				let title = obj.title;
				let category = obj.category;
				let year = obj.year;
				let image = '/api/store/images/'+id+'/'+mainImg+'?format=jpeg&width=100';
				let load = true;
				let showBar = true;
				if (Object.keys(images).length === portfolio.length && images[id]) {
					image = '/api/store/images/'+id+'/'+mainImg;
					load = false;
				}
				if (this.state.loaded.indexOf(id) > -1) {
					showBar = false;
				}
				masonry.push(
					<XBlock key={id+masonry.length} width={2}>
						<Zoom in={true} style={{transitionDelay: (i+5)*20}}>
							<div className={classes.masonryContainer} style={{height: `${height}px`}} onClick={this.openDialog.bind(this, id)}>
								{showBar && <LinearProgress className={classes.progressbar} variant="query" />}
								<img onLoad={this.loadEnd.bind(this, id, load, height)} src={image} className={classes.thumbnail} height={height} width={'100%'}/>
								<div className={classes.infoHover}>{title}<br/>{category}<br/>{year}</div>
							</div>
						</Zoom>
					</XBlock>
				);
			}
		});
		return masonry;
	}

	openDialog = (id) => {
		this.props.history.push('/portfolio/'+id);
	}

	filter = (type) => {
		this.setState({filter: type});
	}

	render() {
		const {classes, portfolio} = this.props;
		const {project, filter} = this.state;

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
				</Scrollbars>
			</div>
		);
	}
}