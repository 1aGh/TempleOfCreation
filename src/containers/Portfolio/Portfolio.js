import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import theme from './PortfolioTheme.js';
import MasonryLayout from 'react-masonry-layout';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('images', false, /\.(png|jpe?g|svg)$/));

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
			let height = i % 2 === 0 ? 200 : 100;
			let mainImg = k+'_1.png';
			console.log('K: ', k, mainImg);
			console.log('images: ', images);
			masonry.push(
				<div key={k+masonry.length} className={classes.masonryContainer}>
					<img src={images[mainImg]} width={'100%'}/>
				</div>
			);
		});
		return masonry;
	}

	render() {
		const {classes, portfolio} = this.props;
console.log('portfolio: ', this.props.portfolio);
		return (
			<div className={classes.testWrapper}>
				<MasonryLayout
					id="masonry-layout"
					infiniteScroll={this.loadItems}>
					{this.getMasonry()}
				</MasonryLayout>
			</div>
		);
	}
}