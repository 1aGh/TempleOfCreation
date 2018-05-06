import React, { Component } from 'react';
import theme from './PudorysTheme.js';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

@withStyles(theme)

export default class Pudorys extends Component {
	static propTypes = {
		classes: PropTypes.any,
		data: PropTypes.any,
	};

	render() {
		const {classes, data} = this.props;

		let content = [];

		Object.keys(data).map((id, index) => {
			let title = data[id].title;
			let h;
			let w;
			let t;
			let l;
			let clas;
			switch (id) {
				case 'kavarna':
					h = 110;
					w = 230;
					t = 490;
					l = 370;
					clas = classes.orange;
					break;
				case 'satna':
					h = 120;
					w = 140;
					t = 370;
					l = 460;
					clas = classes.blue;
					break;
				case 'pcUcebna':
					h = 170;
					w = 140;
					t = 200;
					l = 460;
					clas = classes.blue;
					break;
				case 'atelier':
					h = 200;
					w = 140;
					t = 0;
					l = 460;
					clas = classes.blue;
					break;
				case 'sklad':
					h = 110;
					w = 240;
					t = 490;
					l = 130;
					clas = classes.orange;
					break;
				case 'grafDilna':
					h = 290;
					w = 200;
					t = 200;
					l = 260;
					clas = classes.orange;
					break;
				case 'drevrucDilna':
					h = 290;
					w = 130;
					t = 200;
					l = 130;
					clas = classes.yellow;
					break;
				case 'drevstrojDilna':
					h = 200;
					w = 330;
					t = 0;
					l = 130;
					clas = classes.yellow;
					break;
				case 'kovoDilna':
					h = 200;
					w = 130;
					t = 0;
					l = 0;
					clas = classes.yellow;
					break;
				case 'siciDilna':
					h = 200;
					w = 130;
					t = 200;
					l = 0;
					clas = classes.yellow;
					break;
				case 'lakovna':
					h = 200;
					w = 130;
					t = 400;
					l = 0;
					clas = classes.yellow;
					break;
			}
			let style = {
				width: w,
				height: h,
				top: t,
				left: l,
			};
			content.push(
				<div key={id} className={classes.item + ' ' + clas} style={style}>
					<div className={classes.num}>{index}</div>
					<div className={classes.title}>{title}</div>
				</div>
			);
		});

		return (
			<div className={classes.pudorysCont}>
				{content}
			</div>
		);
	}
}