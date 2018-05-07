import React, { Component } from 'react';
import theme from './PudorysTheme.js';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

@withStyles(theme)

export default class Pudorys extends Component {
	static propTypes = {
		classes: PropTypes.any,
		data: PropTypes.any,
		clickHandle: PropTypes.any,
	};

	handleChange = (id, index) => {
		this.props.clickHandle(id, index);
	}

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
					h = 106;
					w = 226;
					t = 490;
					l = 370;
					clas = classes.orange;
					break;
				case 'satna':
					h = 116;
					w = 136;
					t = 370;
					l = 460;
					clas = classes.blue;
					break;
				case 'pcUcebna':
					h = 166;
					w = 136;
					t = 200;
					l = 460;
					clas = classes.blue;
					break;
				case 'atelier':
					h = 196;
					w = 136;
					t = 0;
					l = 460;
					clas = classes.blue;
					break;
				case 'sklad':
					h = 106;
					w = 236;
					t = 490;
					l = 130;
					clas = classes.orange;
					break;
				case 'grafDilna':
					h = 286;
					w = 196;
					t = 200;
					l = 260;
					clas = classes.orange;
					break;
				case 'drevrucDilna':
					h = 286;
					w = 126;
					t = 200;
					l = 130;
					clas = classes.yellow;
					break;
				case 'drevstrojDilna':
					h = 196;
					w = 326;
					t = 0;
					l = 130;
					clas = classes.yellow;
					break;
				case 'kovoDilna':
					h = 196;
					w = 126;
					t = 0;
					l = 0;
					clas = classes.yellow;
					break;
				case 'siciDilna':
					h = 196;
					w = 126;
					t = 200;
					l = 0;
					clas = classes.yellow;
					break;
				case 'lakovna':
					h = 196;
					w = 126;
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
				<div key={id} className={classes.item + ' ' + clas} style={style} onClick={this.handleChange.bind(this, id, index+1)}>
					<div className={classes.num}>{index+1}</div>
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