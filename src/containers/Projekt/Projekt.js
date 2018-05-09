import React, { Component } from 'react';
import theme from './ProjektTheme.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import TimelineAnim from 'Illustration/timeline_anim.svg';
import Timeline from 'Illustration/timeline.svg';

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
			anim: false,
			showSvg: false,
		};
	}

	pudorysHandle = (id, index) => {
		this.setState({actualPudorys: index, actualPudorysId: id});
	}

	scrollHandle = (e) => {
		if (e.scrollTop <= 750 && !this.state.showSvg) {
			Promise.resolve(this.setState({anim: true})).then(
				setTimeout(() => {
					this.setState({anim: false});
				}, 11000),
				setTimeout(() => {
					this.setState({showSvg: true});
				}, 10500)
			);
		}
	}

	render() {
		const {classes, pudorysText} = this.props;
		const {actualPudorys, actualPudorysId, anim, showSvg} = this.state;

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

		let timelineIcon;
		if (anim) {
			timelineIcon = <TimelineAnim/>;
		}
		let timeline = (
			<div className={classes.timeline}>
				<div className={classes.svgWrapper}>
					{timelineIcon}
					<Timeline className={classes.svgClass} style={{animationPlayState: showSvg ? 'running' : 'paused'}}/>
				</div>
				<div className={classes.legend} style={{animationPlayState: showSvg ? 'running' : 'paused'}}>
					<p>
						Fáze #1 -  Nalezení vhodných prostor<br/>
						Fáze #2 - Regenerace prostor<br/>
						Fáze #3 - Vybavení prostor dle priorit<br/>
						Fáze #4 - Zahájení provozu<br/>
						Fáze #5 - Rozvoj
					</p>
				</div>
			</div>
		);

		return (
			<Scrollbars onScrollFrame={this.scrollHandle.bind(this)}>
				<div className={classes.dialogBar}>
					<div className={classes.title}>PROJEKT</div>
				</div>
				<div className={classes.pageWrapper}>
					{introduction}
					{pudorysContent}
					{timeline}
				</div>
			</Scrollbars>
		);
	}
}