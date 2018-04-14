import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import theme from './PortfolioTheme.js';
import MasonryLayout from 'react-masonry-layout';
import Zoom from 'material-ui/transitions/Zoom';

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

	getMasonry = () => {
		const {classes, portfolio} = this.props;
		let masonry = [];
		Object.keys(portfolio).map((k, i) => {
			// let height = i % 2 === 0 ? Math.floor(Math.random() * (200 + 1) + 300) : Math.floor(Math.random() * (200 + 1) + 100);
			let height = i % 2 === 0 ? 200 : 300;
			let mainImg = k+'_1.png';
			let title = portfolio[k].title;
			let image = '/store/images/'+mainImg;
			masonry.push(
				<Zoom in={true} style={{transitionDelay: i*20}}>
					<div key={k+masonry.length} className={classes.masonryContainer} style={{height: `${height}px`}}>
						<div style={{height: '100%', width: '100%', background: 'url('+image+') center/cover'}}/>
						<div className={classes.infoHover}>{title}</div>
					</div>
				</Zoom>
			);
		});
		return masonry;
	}

	render() {
		const {classes, portfolio} = this.props;
console.log('portfolio: ', this.props.portfolio);
		return (
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
			</div>
		);
	}
}