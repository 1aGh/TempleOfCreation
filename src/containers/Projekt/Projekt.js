import React, { Component } from 'react';
import theme from './ProjektTheme.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import Loadable from 'react-loadable';

import Pudorys from './Pudorys';
// import Network from 'Network/Network';

function Loading(props) {
	if (props.error) {
		return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
	} else if (props.pastDelay) {
		return <div>Loading...</div>;
	} else {
		return null;
	}
}

const Network = Loadable({
	loader: () => import('Network/Network'),
	loading: Loading,
});

@connect(
		state => ({
			pudorysText: state.main.pudorysText,
			network: state.main.network,
		})
)
@withStyles(theme)

export default class Projekt extends Component {
	static propTypes = {
		classes: PropTypes.any,
		pudorysText: PropTypes.any,
		network: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			actualPudorys: 1,
			actualPudorysId: 'kavarna',
			anim: false,
			showSvg: false,
			showNetwork: false,
		};
	}

	pudorysHandle = (id, index) => {
		this.setState({actualPudorys: index, actualPudorysId: id});
	}

	scrollHandle = (e) => {
		if (e.scrollTop >= 700 && !this.state.showSvg) {
			// Promise.resolve(this.setState({anim: true})).then(
			// 	setTimeout(() => {
			// 		this.setState({anim: false});
			// 	}, 11000),
			// 	setTimeout(() => {
			// 		this.setState({showSvg: true});
			// 	}, 10500)
			// );
			this.setState({showSvg: true});
		}
		if (e.scrollTop >= 800 && !this.state.showNetwork) {
			Network.preload();
		}
		if (e.scrollTop >= 950 && !this.state.showNetwork) {
			this.setState({showNetwork: true});
		}
	}

	render() {
		const {classes, pudorysText, network} = this.props;
		const {actualPudorys, actualPudorysId, anim, showSvg, showNetwork} = this.state;

		let introduction = (
			<div className={classes.introduction}>
				<div className={classes.introBar}>
					<div className={classes.title}>ÚVOD</div>
				</div>
				<div className={classes.text}>
					<p>Hlavním cílem projektu Temple of Creation je vytvořit veřejný prostor pro osobní i kreativní rozvoj návštěvníků z řad kutilů, studentů, profesionálů ale i komerční sféry. Naše vize je spustit systém individuálních dílen, organizovaných workshopů nebo rekvalifikačních kurzů.</p>
					<p>Součástí myšlenky je i e-shop, který nabízí možnost propagace výrobků vzniklých v kreativním centru a také kavárna s diskusním prostorem určeným k přednáškám.</p>
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

		// let timelineIcon;
		// if (anim) {
		// 	timelineIcon = <img src='/api/store/static/timeline_anim.svg' height="100%"/>;
		// }
		let timeline = (
			<Grid container spacing={0} className={classes.timeline}>
				<Grid item container justify={'center'} alignItems={'center'} xs={7}>
					{/* {timelineIcon} */}
					<img className={classes.svgClass} src='/api/store/static/timeline.svg' style={{animationPlayState: showSvg ? 'running' : 'paused'}} height="100%"/>
				</Grid>
				<Grid item container xs={5} justify={'flex-start'} alignItems={'center'}>
					<div className={classes.legend} style={{animationPlayState: showSvg ? 'running' : 'paused'}}>
						Fáze #1 -  Nalezení vhodných prostor<br/>
						Fáze #2 - Regenerace prostor<br/>
						Fáze #3 - Vybavení prostor dle priorit<br/>
						Fáze #4 - Zahájení provozu<br/>
						Fáze #5 - Rozvoj
					</div>
				</Grid>
			</Grid>
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
					{showNetwork && <Network graph={network} show={showNetwork}/>}
				</div>
			</Scrollbars>
		);
	}
}