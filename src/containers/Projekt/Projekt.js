import React, { Component } from 'react';
import theme from './ProjektTheme.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import Pudorys from './Pudorys';

@connect(
		state => ({
			pudorysText: state.main.pudorysText,
		})
)
@withStyles(theme)

export default class Projekt extends Component {
	static propTypes = {
		classes: PropTypes.any,
		pudorysText: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			actualPudorys: 1,
			actualPudorysId: 'kavarna',
		};
	}

	pudorysHandle = (id, index) => {
		this.setState({actualPudorys: index, actualPudorysId: id});
	}

	render() {
		const {classes, pudorysText} = this.props;
		const {actualPudorys, actualPudorysId} = this.state;

		let introduction = (
			<div className={classes.introduction}>
				<div className={classes.introBar}>
					<div className={classes.title}>ÚVOD</div>
				</div>
				<div className={classes.text}>
					Hlavním cílem projektu je vytvořit veřejný prostor pro osobní i kreativní rozvoj návštěvníků z řad kutilů, studentů,
					profesionálů ale i komerční sféry. Naše vize je vytvořit systém individuálních dílen, organizovaných workshopů
					nebo rekvalifikačních kurzů. Součástí myšlenky je i eshop, který nabízí další možnost propagace výrobků vzniklých
					v kreativním centru a kavárna s diskuzním prostorem určeným k přednáškám.
				</div>
			</div>
		);

		let pudorysContent;
		if (pudorysText && pudorysText[actualPudorysId]) {
			let pudorys = pudorysText[actualPudorysId];
			pudorysContent = (
				<div className={classes.pudorys}>
					<div className={classes.infoPudorysContainer}>
						<div className={classes.pudorysBar}>
							<div className={classes.title}>{actualPudorys}</div>
						</div>
						<div className={classes.pudorysTitle}>{pudorys.title}</div>
						<div className={classes.pudorysArea}>{pudorys.area}</div>
							<div className={classes.text}>
								{pudorys.desc}
							</div>
						</div>
						<div className={classes.pudorysMap}><Pudorys data={pudorysText} clickHandle={this.pudorysHandle}/></div>
					</div>
				);
		}

		return (
			<Scrollbars>
				<div className={classes.dialogBar}>
					<div className={classes.title}>PROJEKT</div>
				</div>
				<div className={classes.pageWrapper}>
					{introduction}
					{pudorysContent}
				</div>
			</Scrollbars>
		);
	}
}