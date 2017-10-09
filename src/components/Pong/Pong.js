import React, { Component } from 'react';
import theme from './Pong.scss';

export default class Pong extends Component {
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
			winner: '',
			monkey: false,
			ballY: 0,
			ballX: 0,
			fps: 65,
			paddleWidth: 100,
			ballRadius: 6,
			ballSpeedY: 0,
			ballSpeedX: 0,
			paddle1Y: 0,
			paddle2Y: 0,
			paddleSpeed: 20,
			keys: null,
			newGame: false,
			secondsElapsed: 0,
		};
	}

	componentDidMount = () => {
		let gameWidth = document.documentElement.clientWidth-20;
		let gameHeight = document.documentElement.clientHeight-20;
		console.log('componentDidMount');
		this.setState({
			gameWidth: gameWidth,
			gameHeight: gameHeight,
			ballY: gameWidth/2,
			ballX: gameHeight/2,
			paddle1Y: (gameHeight/2)-(this.state.paddleWidth/2),
			paddle2Y: (gameHeight/2)-(this.state.paddleWidth/2)
		});
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
		// this.interval = setInterval(() => { this.tick(); this.moveAll(); }, 1000/65);
		document.addEventListener('keypress', function(e) {
			if (e.keyCode === 32){
				this.startNewGame();
			}
		});
		this.drawAll();
		this.interval = null;
	}

	// shouldComponentUpdate = (nextProps) => {
	// 	if (nextProps.gameOver || nextProps.newGame) {
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// }

	componentWillUpdate() {
		// this.drawAll();
	}
	componentDidUpdate = () => {
		this.drawAll();
	}

	componentWillUnmount = () => {
		clearInterval(this.interval);
	}

	tick = () => {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	}

	startNewGame = () => {
		let {gameOver, newGame, gameHeight, gameWidth, fps} = this.state;
		if (!newGame) {
			console.log('NEWGAME');
			this.setState({
				gameOver: false,
				winner: '',
				player1Score: 0,
				player2Score: 0,
				newGame: true,
				ballSpeedX: gameHeight/65,
			});
			this.interval = setInterval(() => { this.tick(); this.moveAll(); }, 1000/fps);
			this.drawAll();
		}
	}
	endGame = () => {
		let {gameOver, newGame, gameWidth, gameHeight, ballSpeedX, paddleWidth} = this.state;
		this.setState({
			gameOver: true,
			newGame: false,
			ballY: gameWidth/2,
			ballX: gameHeight/2,
			ballSpeedX: 0,
			ballSpeedY: 0,
			paddle1Y: (gameHeight/2)-(paddleWidth/2),
			paddle2Y: (gameHeight/2)-(paddleWidth/2),
		});
		clearInterval(this.interval);
		this.drawAll();
	}
	reset = () => {
		console.log('RESET');
		let {gameWidth, gameHeight, ballSpeedX} = this.state;
		this.setState({ballX: gameWidth/2, ballY: gameHeight/2, ballSpeedX: -ballSpeedX, ballSpeedY: 0});
	}
	// draw everything on screen
	drawAll = () => {
		const {ballY, ballX, gameWidth, gameHeight, player1Score, player2Score, paddle1Y, paddle2Y, paddleWidth, ballRadius} = this.state;
		console.log('DRAW', ballY, ballX);
		let ctx = this.canvas.getContext('2d');
		// screen
		ctx.fillStyle = '#333';
		ctx.fillRect(0, 0, gameWidth, gameHeight);
		// middle dashed line
		ctx.strokeStyle = '#fff';
		ctx.setLineDash([10]);
		ctx.beginPath();
		ctx.moveTo(gameWidth / 2,0);
		ctx.lineTo(gameWidth / 2, gameHeight);
		ctx.stroke();
		// score
		ctx.font = '30px Orbitron';
		ctx.fillStyle = '#888';
		ctx.fillText(player2Score,((gameWidth/2)/2),100);
		ctx.fillText(player1Score,((gameWidth/2)*1.5),100);
		// 2 rects
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, paddle1Y, 10, paddleWidth);
		ctx.fillRect(gameWidth -10, paddle2Y, 10, paddleWidth);
		// ball
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
		ctx.fill();
	}
	// move stuff begore drawing again
	moveAll = () => {
		const {ballY, ballX, gameWidth, gameHeight, player1Score, player2Score, paddle1Y, paddle2Y, paddleWidth, ballRadius, ballSpeedX, ballSpeedY, monkey, paddleSpeed, keys} = this.state;
		// ball movement
		this.setState({ballX: ballX+ballSpeedX,ballY: ballY+ballSpeedY});
		// horizontal
		if(ballX > gameWidth || ballX < 0){
			// right side collision
			if(ballX > gameWidth-30 && (ballY >= paddle2Y && ballY <= paddle2Y + paddleWidth+10)){
				console.log('RIGHT SIDE');
				let deltaY = ballY - (paddle2Y + paddleWidth/2);
				this.setState({ballSpeedX: -Math.abs(ballSpeedX), ballSpeedY: deltaY * 0.35});
			// left side collision
			}else if(ballX < 30 && (ballY >= paddle1Y && ballY <= paddle1Y + paddleWidth+10)){
				console.log('LEFT SIDE');
				let deltaY = ballY - (paddle1Y + paddleWidth/2);
				this.setState({ballSpeedX: Math.abs(ballSpeedX), ballSpeedY: deltaY * 0.35});
			}else {
				if(ballX >= gameWidth){
					console.log('ADD PL2');
					this.setState({player2Score: player2Score+1});
					if(player2Score === 9){
						console.log('PLAYER2 WIN');
						this.setState({winner: 'PLAYER2'});
						this.endGame();
					}
				}else if (ballX <= 0) {
					console.log('ADD PL1');
					this.setState({player1Score: player1Score+1});
					if(player1Score === 9){
						console.log('PLAYER2 WIN');
						this.setState({winner: 'PLAYER1'});
						this.endGame();
					}
				}
				this.reset();
			}
		}// vertical
		if(ballY > gameHeight){
			this.setState({ballSpeedY: -Math.abs(ballSpeedY)});
		} else if (ballY < 0) {
			this.setState({ballSpeedY: Math.abs(-ballSpeedY)});
		}
		// ai paddle movement, limits at canvas boundaries to make it more efficient
		if(!monkey){
			if(ballY > paddle2Y+paddleWidth/3 && (paddle2Y + paddleWidth) < gameHeight){
				this.setState({paddle2Y: paddle2Y+paddleSpeed});
			}else if(ballY < paddle2Y+paddleWidth/3 && paddle2Y > 0){
				this.setState({paddle2Y: paddle2Y-paddleSpeed});
			}
		}else{
			if (keys.isPressed(40) && (paddle2Y + paddleWidth) < gameHeight) { // DOWN
				this.setState({paddle2Y: paddle2Y+paddleSpeed});
			} else if (keys.isPressed(38) && paddle2Y > 0) { // UP
				this.setState({paddle2Y: paddle2Y-paddleSpeed});
			}
		}
		// player1 paddle movement thanks to
		// http://blog.mailson.org/2013/02/simple-pong-game-using-html5-and-canvas
		// same limits as ai for efficiency
		if (keys.isPressed(83) && (paddle1Y + paddleWidth) < gameHeight) { // DOWN
			this.setState({paddle1Y: paddle1Y+paddleSpeed});
		} else if (keys.isPressed(87) && paddle1Y > 0) { // UP
			this.setState({paddle1Y: paddle1Y-paddleSpeed});
		}
	}
	// draw default if changing game type, else save last draw
	// GameOver = () => {
	// 	const {ballY, ballX, gameWidth, gameHeight, player1Score, player2Score, paddle1Y, paddle2Y, paddleWidth, ballRadius, ballSpeedX, ballSpeedY, monkey, paddleSpeed, winner} = this.state;
	// 	let ctx = this.canvas.getContext('2d');
	// 	this.setState({ballSpeedY: 0, paddle1Y: (gameHeight/2) - (paddleWidth/2),paddle2Y: (gameHeight/2) - (paddleWidth/2),player1Score: 0, player2Score: 0});
	// 	ctx.textAlign = 'center';
	// 	if(winner !== ''){
	// 		ctx.fillStyle = '#888';
	// 		ctx.font = '36px Orbitron';
	// 		ctx.fillText(winner + ' WON!',gameWidth/2,150);
	// 	}else{
	// 		this.setState({ballY: gameHeight/2, ballX: gameWidth/2, gameOver: true});
	// 		this.drawAll();
	// 	}
	// }
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
	render() {
		const {ballY, ballX, gameWidth, gameHeight, player1Score, player2Score, paddle1Y, paddle2Y, paddleWidth, ballRadius, ballSpeedX, ballSpeedY, monkey, paddleSpeed, winner, btnMultiplayer, buttonRight, keys, newGame, secondsElapsed, gameOver} = this.state;
		// console.log('STATE: ', this.state);
		// console.log('interval: ', this.interval);
		return(
			<div className={theme.pongWrapper} onClick={this.startNewGame}>
				{!newGame && <div className={theme.title}>Click anywhere to start a New Game</div>}
				{gameOver && <div className={theme.title}>{winner} WON!!!</div>}
				<canvas ref={element => this.canvas = element} width={gameWidth} height={gameHeight} id='gameCanvas' />
				<div className={theme.buttons}>
					<div>Second: {secondsElapsed}</div>
					<div>Ball Y: {ballY}</div>
					<div>Ball X: {ballX}</div>
					<div>BallSpeed Y: {ballSpeedY}</div>
					<div>BallSpeed X: {ballSpeedX}</div>
					<div>Game Width: {gameWidth}</div>
					<div>Game Height: {gameHeight}</div>
					<div className='buttons buttonLeft'>W</div>
					<div className='buttons buttonLeft' id='buttonS'>S</div>
					{buttonRight && <div className='buttons buttonRight' id='buttonUp'>Up</div>}
					{buttonRight && <div className='buttons buttonRight'>Down</div>}
					{!btnMultiplayer && <button className='buttons' id='butt1' ref={(div) => { this.butt1 = div; }} onClick={this.butt1Click}>vs Computer</button>}
					{btnMultiplayer && <button className='buttons' id='butt2' ref={(div) => { this.butt2 = div; }} onClick={this.butt2Click}>2 Players</button>}
				</div>
				</div>
		);
	}
}