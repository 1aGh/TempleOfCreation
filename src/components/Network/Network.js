import React, { Component } from 'react';
import theme from './NetworkTheme.js';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Graph from 'react-graph-vis';

@withStyles(theme)

export default class Network extends Component {
	static propTypes = {
		classes: PropTypes.any,
		graph: PropTypes.any,
		show: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
		};
	}

	getPosition = (e) => {
		console.log('POSITIONS', e, this.network.getPositions());
	}

	setNetworkInstance = (nw) => {
			this.network = nw;
	}

	groupsOption = (type) => {
		let color = 'rgb(234, 181, 67)';
		let bgcolor = 'rgb(49, 47, 47)';
		let hoverColor = 'rgba(234, 181, 67, 0.8)';
		let fontColor = 'rgb(234, 181, 67)';
		let shape = 'box';
		let size;
		let fixed = false;
		let border = 3;
		let physics = false;
		switch (type) {
			case 'main':
				size = 60;
				shape = 'circularImage';
				fixed = true;
				border = 8;
				break;
			case 'cluster':
				size = 8;
				shape = 'circle';
				fixed = true;
				border = 6;
				break;
			case 'sub':
				size = 5;
				physics = true;
				break;
		}

		let groupsOption = {
			image: 'store/static/network_icon.svg',
			borderWidth: border,
			borderWidthSelected: border,
			color:{
				border: color,
				background: bgcolor,
				highlight: {
					border: color,
					background: bgcolor
				},
				hover: {
					border: hoverColor,
					background: hoverColor
				}
			},
			shapeProperties: {
				borderRadius: 50
			},
			shadow: {
				enabled: false,
			},
			font: {
				color: fontColor,
				size: size,
				face: "'IBM Plex Mono', monospace",
			},
			heightConstraint: {
				minimum: 5
			},
			physics: physics,
			shape: shape,
			margin: 10,
			size: size,
		};
		return groupsOption;
	}

	render() {
		const {classes, graph, show} = this.props;
		let width = 600;
		let height = 600;
		let options = {
			autoResize: true,
			width: '100%',
			height: '100%',
			nodes: {},
			edges: {
				width: 2,
				arrows: {
					to:     {enabled: false, scaleFactor:1, type:'arrow'},
					middle: {enabled: false, scaleFactor:1, type:'arrow'},
					from:   {enabled: false, scaleFactor:1, type:'arrow'}
				},
			},
			interaction: {
				dragNodes: true,
				zoomView: true,
				dragView: true,
				selectable: false,
			},
			groups:{
				main: this.groupsOption('main'),
				cluster: this.groupsOption('cluster'),
				sub: this.groupsOption('sub')
			},
			physics: {
				timestep: 0.3,
				solver: 'barnesHut',
				barnesHut: {
					gravitationalConstant: -50000,
					centralGravity: 0,
					avoidOverlap: 0,
					springLength: 60,
					springConstant: 0.5,
				}
			}
		};
		let events = {
			select: (event) => {
				let { nodes, edges } = event;
				this.getPosition(nodes);
			}
		};

		return (
			<div className={classes.container}>
				<div className={classes.headline}>{'Přehled činností'}</div>
					<div className={classes.graph}>
						{show && <Graph graph={graph} options={options} events={events} getNetwork={this.setNetworkInstance}/>}
					</div>
			</div>
		);
	}
}