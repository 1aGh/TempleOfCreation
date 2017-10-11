import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './Pong.scss';

import CancelIcon from 'react-icons/lib/ti/delete-outline';
import MobileDetect from 'mobile-detect';

export default class Pong extends Component {
	static propTypes = {
		close: PropTypes.any,
	};

	constructor(props){
		super(props);
		this.state = {
			buttonRight: false,
			btnMultiplayer: false,
			gameWidth: 0,
			gameHeight: 0,
			player1Score: 0,
			player2Score: 0,
			gameOver: false,
			winner: null,
			monkey: false,
			ballY: 0,
			ballX: 0,
			fps: 65,
			paddleWidth: 150,
			ballRadius: 6,
			ballSpeedY: 0,
			ballSpeedX: 0,
			paddle1Y: 0,
			paddle2Y: 0,
			paddleSpeed: 20,
			keys: null,
			newGame: false,
			mobile: null,
		};
	}

	componentWillMount(){
		this.setState({gameHeight: window.innerHeight});
	}

	componentDidMount = () => {
		let gameWidth = document.getElementById('gameCanvas').clientWidth;
		let mobile = new MobileDetect(window.navigator.userAgent);
		this.setState({
			gameWidth: gameWidth,
			ballY: (this.state.gameHeight/2)-10,
			ballX: (gameWidth/2)-10,
			paddle1Y: (this.state.gameHeight/2)-(this.state.paddleWidth/2),
			paddle2Y: (this.state.gameHeight/2)-(this.state.paddleWidth/2),
			mobile: mobile.mobile()
		});
		// if (mobile.mobile() === null) {
			function KeyListener() {
				this.pressedKeys = [];
				this.keydown = (e) => { this.pressedKeys[e.keyCode] = true; };
				this.keyup = (e) => { this.pressedKeys[e.keyCode] = false; };
				document.addEventListener('keydown', this.keydown.bind(this));
				document.addEventListener('keyup', this.keyup.bind(this));
			}
			KeyListener.prototype.isPressed = function(key){
				return this.pressedKeys[key] ? true : false;
			};
			KeyListener.prototype.addKeyPressListener = function(keyCode, callback){
				document.addEventListener('keypress', function(e) {
					if (e.keyCode === keyCode) {
						callback(e);
					}
				});
			};
			var keys = new KeyListener();
			this.setState({keys: keys});
			document.addEventListener('keypress', function(e) {
				if (e.keyCode === 32){
					this.startNewGame();
				}
			});
		// }
		this.interval = null;
	}

	componentWillUnmount = () => {
		clearInterval(this.interval);
	}

	startNewGame = () => {
		let {gameOver, newGame, gameHeight, gameWidth, fps} = this.state;
		if (!newGame) {
			this.setState({
				gameOver: false,
				winner: null,
				player1Score: 0,
				player2Score: 0,
				newGame: true,
				ballSpeedX: gameHeight/65,
			});
			this.interval = setInterval(() => { this.moveAll(); }, 1000/fps);
			// this.drawAll();
		}
	}
	endGame = () => {
		let {gameOver, newGame, gameWidth, gameHeight, ballSpeedX, paddleWidth} = this.state;
		this.setState({
			gameOver: true,
			newGame: false,
			ballY: (gameHeight/2)-10,
			ballX: (gameWidth/2)-10,
			ballSpeedX: 0,
			ballSpeedY: 0,
			paddle1Y: (gameHeight/2)-(paddleWidth/2),
			paddle2Y: (gameHeight/2)-(paddleWidth/2),
		});
		clearInterval(this.interval);
		// this.drawAll();
	}
	reset = () => {
		let {gameWidth, gameHeight, ballSpeedX} = this.state;
		this.setState({ballX: (gameWidth/2)-10, ballY: (gameHeight/2)-10, ballSpeedX: -ballSpeedX, ballSpeedY: 0});
	}

	// move stuff begore drawing again
	moveAll = () => {
		const {ballY, ballX, gameWidth, gameHeight, player1Score, player2Score, paddle1Y, paddle2Y, paddleWidth, ballRadius, ballSpeedX, ballSpeedY, monkey, paddleSpeed, keys} = this.state;
		// ball movement
		this.setState({ballX: ballX+ballSpeedX,ballY: ballY+ballSpeedY});
		// horizontal
		if(ballX+20 > gameWidth-50 || ballX < 20){
			// right side collision
			if(ballX+20 > gameWidth-50 && (ballY+30 >= paddle2Y && ballY <= paddle2Y + paddleWidth+10)){
				let deltaY = ballY - (paddle2Y + paddleWidth/2);
				this.setState({ballSpeedX: -Math.abs(ballSpeedX), ballSpeedY: deltaY * 0.35});
			// left side collision
		}else if(ballX < 30 && (ballY+30 >= paddle1Y && ballY <= paddle1Y + paddleWidth+10)){
				let deltaY = ballY - (paddle1Y + paddleWidth/2);
				this.setState({ballSpeedX: Math.abs(ballSpeedX), ballSpeedY: deltaY * 0.35});
			}else {
				if(ballX+20 > gameWidth-50){
					this.setState({player1Score: player1Score+1});
					if(player1Score === 9){
						this.setState({winner: 'PLAYER 1'});
						this.endGame();
					}
				}else if (ballX < 20) {
					this.setState({player2Score: player2Score+1});
					if(player2Score === 9){
						this.setState({winner: 'PLAYER 2'});
						this.endGame();
					}
				}
				this.reset();
			}
		}// vertical
		if(ballY+20 > gameHeight-20){
			this.setState({ballSpeedY: -Math.abs(ballSpeedY)});
		} else if (ballY < 20) {
			this.setState({ballSpeedY: Math.abs(-ballSpeedY)});
		}
		// ai paddle movement, limits at canvas boundaries to make it more efficient
		if(!monkey){
			if(ballY > paddle2Y+paddleWidth/3 && (paddle2Y + paddleWidth) < gameHeight-20){
				this.setState({paddle2Y: paddle2Y+(paddleSpeed-15)});
			}else if(ballY < paddle2Y+paddleWidth/3 && paddle2Y > 20){
				this.setState({paddle2Y: paddle2Y-(paddleSpeed-15)});
			}
		}else{
			if (keys.isPressed(40) && (paddle2Y + paddleWidth) < gameHeight-20) { // DOWN
				this.setState({paddle2Y: paddle2Y+paddleSpeed});
			} else if (keys.isPressed(38) && paddle2Y > 20) { // UP
				this.setState({paddle2Y: paddle2Y-paddleSpeed});
			}
		}
		if (keys.isPressed(83) && (paddle1Y + paddleWidth) < gameHeight-20) { // DOWN
			this.setState({paddle1Y: paddle1Y+paddleSpeed});
		} else if (keys.isPressed(87) && paddle1Y > 20) { // UP
			this.setState({paddle1Y: paddle1Y-paddleSpeed});
		}
	}

	// trigger 2 monkeys
	butt1Click = () => {
		this.endGame();
		this.setState({btnMultiplayer: true, buttonRight: true, monkey: true});
	}
	// trigger AI
	butt2Click = () => {
		this.endGame();
		this.setState({buttonRight: false, btnMultiplayer: false, monkey: false});
	}

	swipeHandle = (event) => {
		const {paddleWidth} = this.state;
		let p1Y = event.touches[0].screenY;
		this.setState({paddle1Y: p1Y-paddleWidth});
	}

	render() {
		const {ballY, ballX, gameWidth, gameHeight, player1Score, player2Score, paddle1Y, paddle2Y, paddleWidth, ballRadius, ballSpeedX, ballSpeedY, monkey, paddleSpeed, winner, btnMultiplayer, buttonRight, keys, newGame, secondsElapsed, gameOver, mobile} = this.state;
		return(
			<div className={theme.pongWrapper} id='pongWrapper' onTouchMove={this.swipeHandle.bind(this)}>
				<CancelIcon className={theme.cancelIcon} onClick={this.props.close}/>
				<div className={theme.scoreP1} style={{left: (gameWidth/2)/2, top: 100}}>{player1Score}</div>
				<div className={theme.scoreP2} style={{left: (gameWidth/2)*1.5, top: 100}}>{player2Score}</div>
				{!newGame && <div className={theme.title} style={{top: 20}}>Click anywhere to start a New Game</div>}
				{(gameOver && winner) && <div className={theme.title} style={{left: (gameWidth/2)-350, top: 200}}>{winner} WON!!!</div>}
				{!mobile && <div className={theme.buttonsLeft} style={{left: ((gameWidth/2)/2)-75}}>
					<div>UP: W</div>
					<div>DOWN: S</div>
				</div>}
				{btnMultiplayer &&
					<div className={theme.buttonsRight} style={{left: ((gameWidth/2)*1.5)-75}}>
					<div>UP: up</div>
					<div>DOWN: down</div>
				</div>}
				{(!btnMultiplayer && !mobile) && <div className={theme.btnMult} style={{left: (gameWidth/2)-75}} onClick={this.butt1Click}>vs Computer</div>}
				{(btnMultiplayer && !mobile) && <div className={theme.btnMult} style={{left: (gameWidth/2)-75}} onClick={this.butt2Click}>2 Players</div>}
				<div className={theme.gameCanvas} onClick={this.startNewGame} id='gameCanvas'>
					<div className={theme.middleLine} style={{left: (gameWidth/2)-2}}></div>
					<div className={theme.paddle1} style={{top: paddle1Y, height: paddleWidth}}></div>
					<div className={theme.paddle2} style={{top: paddle2Y, height: paddleWidth}}></div>
					<div className={theme.ball} style={{top: ballY, left: ballX}}></div>
				</div>
			</div>
		);
	}
}