import React, { Component } from 'react';
import theme from './NetworkTheme.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Graph from 'react-graph-vis';
import {kavarnag, sdilnag, studiog, rekvg, coworkg, cdilnag} from 'network';

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
			'sdilna': false,
			'studio': false,
			'cowork': false,
			'cdilna': false,
			'rekv': false,
			'kavarna': false,
		};
	}

	getPosition = (e) => {
		if (e && e.length && this.props.graph && this.props.graph.nodes) {
			this.props.graph.nodes.map((item) => {
				if (item && item.id && item.id === e[0]) {
					let sId = item.id.toString();
					if (sId.match(/(^41|9|16|33|36|23$)/)) {
						let id;
						switch (sId) {
							case '41':
								id = 'kavarna';
								break;
							case '9':
								id = 'sdilna';
								break;
							case '16':
								id = 'studio';
								break;
							case '33':
								id = 'cowork';
								break;
							case '36':
								id = 'cdilna';
								break;
							case '23':
								id = 'rekv';
								break;
						}
						this.setState({[id]: !this.state[id]});
					}
				}
			});
		}
	}

	setNetworkInstance = (nw) => {
			this.network = nw;
	}

	moveCanvas = (e) => {
		let position = this.network.getViewPosition();
		let velx = e.event.velocityX;
		let vely = e.event.velocityY;
		let posx = velx*10;
		let posy = vely*10;
		let x = position.x-posx;
		let y = position.y-posy;
		this.network.moveTo({position: {x: x, y: y}});
	}

	groupsOption = (type) => {
		let color = 'rgb(234, 181, 67)';
		let bgcolor = 'rgb(49, 47, 47)';
		let hoverColor = 'rgba(234, 181, 67, 0.8)';
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
				color: color,
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
		const {kavarna, sdilna, cdilna, rekv, studio, cowork} = this.state;
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
				selectable: true,
				multiselect: false,
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
			click: (event) => {
				let {nodes, edges} = event;
				this.getPosition(nodes);
			},
			dragging: (e) => {
				let {nodes, event} = e;
				if (nodes && nodes.length && nodes[0] === 2) {
					this.moveCanvas(e);
				}
			},
		};

		let g = {...graph};
		if (kavarna) {
			g.nodes = [...g.nodes, ...kavarnag];
		}
		if (sdilna) {
			g.nodes = [...g.nodes, ...sdilnag];
		}
		if (cdilna) {
			g.nodes = [...g.nodes, ...cdilnag];
		}
		if (rekv) {
			g.nodes = [...g.nodes, ...rekvg];
		}
		if (cowork) {
			g.nodes = [...g.nodes, ...coworkg];
		}
		if (studio) {
			g.nodes = [...g.nodes, ...studiog];
		}


		return (
			<div className={classes.container}>
				<div className={classes.headline}>{'Přehled činností'}</div>
					<div className={classes.graph}>
						{show && <Graph graph={g} options={options} events={events} getNetwork={this.setNetworkInstance}/>}
					</div>
			</div>
		);
	}
}