webpackJsonp([3],{418:function(e,t,a){"use strict";(function(e){function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,d,s=a(38),i=l(s),r=a(26),u=l(r),o=a(27),c=l(o),p=a(36),f=l(p),m=a(37),h=l(m),v=a(1),b=l(v),y=a(2),g=l(y),S=a(780),k=l(S),Y=a(781),w=l(Y),E=a(192),_=l(E);!function(){var t=a(0).enterModule;t&&t(e)}();var P=(d=n=function(e){function t(e){(0,u.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.componentDidMount=function(){function e(){var e=this;this.pressedKeys=[],this.keydown=function(t){e.pressedKeys[t.keyCode]=!0},this.keyup=function(t){e.pressedKeys[t.keyCode]=!1},document.addEventListener("keydown",this.keydown.bind(this)),document.addEventListener("keyup",this.keyup.bind(this))}var t=document.getElementById("gameCanvas").clientWidth,l=new _.default(window.navigator.userAgent);a.setState({gameWidth:t,ballY:a.state.gameHeight/2-10,ballX:t/2-10,paddle1Y:a.state.gameHeight/2-a.state.paddleWidth/2,paddle2Y:a.state.gameHeight/2-a.state.paddleWidth/2,mobile:l.mobile()}),e.prototype.isPressed=function(e){return!!this.pressedKeys[e]},e.prototype.addKeyPressListener=function(e,t){document.addEventListener("keypress",function(a){a.keyCode===e&&t(a)})};var n=new e;a.setState({keys:n}),document.addEventListener("keypress",function(e){32===e.keyCode&&this.startNewGame()}),a.interval=null},a.componentWillUnmount=function(){clearInterval(a.interval)},a.startNewGame=function(){var e=a.state,t=e.newGame,l=e.gameHeight,n=e.fps;t||(a.setState({gameOver:!1,winner:null,player1Score:0,player2Score:0,newGame:!0,ballSpeedX:l/65}),a.interval=setInterval(function(){a.moveAll()},1e3/n))},a.endGame=function(){var e=a.state,t=e.gameWidth,l=e.gameHeight,n=e.paddleWidth;a.setState({gameOver:!0,newGame:!1,ballY:l/2-10,ballX:t/2-10,ballSpeedX:0,ballSpeedY:0,paddle1Y:l/2-n/2,paddle2Y:l/2-n/2}),clearInterval(a.interval)},a.reset=function(){var e=a.state;a.setState({ballX:e.gameWidth/2-10,ballY:e.gameHeight/2-10,ballSpeedX:-e.ballSpeedX,ballSpeedY:0})},a.moveAll=function(){var e=a.state,t=e.ballY,l=e.ballX,n=e.gameWidth,d=e.gameHeight,s=e.player1Score,i=e.player2Score,r=e.paddle1Y,u=e.paddle2Y,o=e.paddleWidth,c=e.ballSpeedX,p=e.ballSpeedY,f=e.monkey,m=e.paddleSpeed,h=e.keys;if(a.setState({ballX:l+c,ballY:t+p}),l+20>n-50||20>l)if(l+20<=n-50||t+30<u||u+o+10<t)if(30<=l||t+30<r||r+o+10<t)l+20>n-50?(a.setState({player1Score:s+1}),9===s&&(a.setState({winner:"PLAYER 1"}),a.endGame())):20>l&&(a.setState({player2Score:i+1}),9===i&&(a.setState({winner:"PLAYER 2"}),a.endGame())),a.reset();else{var v=t-(r+o/2);a.setState({ballSpeedX:Math.abs(c),ballSpeedY:.35*v})}else{var b=t-(u+o/2);a.setState({ballSpeedX:-Math.abs(c),ballSpeedY:.35*b})}t+20>d-20?a.setState({ballSpeedY:-Math.abs(p)}):20>t&&a.setState({ballSpeedY:Math.abs(-p)}),f?h.isPressed(40)&&d-20>u+o?a.setState({paddle2Y:u+m}):h.isPressed(38)&&u>20&&a.setState({paddle2Y:u-m}):t>u+o/3&&d-20>u+o?a.setState({paddle2Y:u+(m-15)}):u+o/3>t&&u>20&&a.setState({paddle2Y:u-(m-15)}),h.isPressed(83)&&d-20>r+o?a.setState({paddle1Y:r+m}):h.isPressed(87)&&r>20&&a.setState({paddle1Y:r-m})},a.butt1Click=function(){a.endGame(),a.setState({btnMultiplayer:!0,buttonRight:!0,monkey:!0})},a.butt2Click=function(){a.endGame(),a.setState({buttonRight:!1,btnMultiplayer:!1,monkey:!1})},a.swipeHandle=function(e){a.setState({paddle1Y:e.touches[0].screenY-a.state.paddleWidth})},a.state={buttonRight:!1,btnMultiplayer:!1,gameWidth:0,gameHeight:0,player1Score:0,player2Score:0,gameOver:!1,winner:null,monkey:!1,ballY:0,ballX:0,fps:65,paddleWidth:150,ballRadius:6,ballSpeedY:0,ballSpeedX:0,paddle1Y:0,paddle2Y:0,paddleSpeed:20,keys:null,newGame:!1,mobile:null},a}return(0,h.default)(t,e),(0,c.default)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({gameHeight:window.innerHeight})}},{key:"render",value:function(){var e=this.state,t=e.ballY,a=e.ballX,l=e.gameWidth,n=e.player1Score,d=e.player2Score,s=e.paddle1Y,i=e.paddle2Y,r=e.paddleWidth,u=e.winner,o=e.btnMultiplayer,c=e.newGame,p=e.gameOver,f=e.mobile;return b.default.createElement("div",{className:k.default.pongWrapper,id:"pongWrapper",onTouchMove:this.swipeHandle.bind(this)},b.default.createElement(w.default,{className:k.default.cancelIcon,onClick:this.props.close}),b.default.createElement("div",{className:k.default.scoreP1,style:{left:l/2/2,top:100}},n),b.default.createElement("div",{className:k.default.scoreP2,style:{left:l/2*1.5,top:100}},d),!c&&b.default.createElement("div",{className:k.default.title,style:{top:20}},"Click anywhere to start a New Game"),p&&u&&b.default.createElement("div",{className:k.default.title,style:{left:l/2-350,top:200}},u," WON!!!"),!f&&b.default.createElement("div",{className:k.default.buttonsLeft,style:{left:l/2/2-75}},b.default.createElement("div",null,"UP: W"),b.default.createElement("div",null,"DOWN: S")),o&&b.default.createElement("div",{className:k.default.buttonsRight,style:{left:l/2*1.5-75}},b.default.createElement("div",null,"UP: up"),b.default.createElement("div",null,"DOWN: down")),!o&&!f&&b.default.createElement("div",{className:k.default.btnMult,style:{left:l/2-75},onClick:this.butt1Click},"vs Computer"),o&&!f&&b.default.createElement("div",{className:k.default.btnMult,style:{left:l/2-75},onClick:this.butt2Click},"2 Players"),b.default.createElement("div",{className:k.default.gameCanvas,onClick:this.startNewGame,id:"gameCanvas"},b.default.createElement("div",{className:k.default.middleLine,style:{left:l/2-2}}),b.default.createElement("div",{className:k.default.paddle1,style:{top:s,height:r}}),b.default.createElement("div",{className:k.default.paddle2,style:{top:i,height:r}}),b.default.createElement("div",{className:k.default.ball,style:{top:t,left:a}})))}}]),t}(v.Component),n.propTypes={close:g.default.any},d);t.default=P,function(){var t=a(0).default,l=a(0).leaveModule;t&&(t.register(P,"Pong","/home/iagh/Documents/TempleOfCreation/src/components/Pong/Pong.js"),l(e))}()}).call(t,a(3)(e))},780:function(e,t){e.exports={pongWrapper:"_2jWiKIBsoq-rBGcdEPnWJK",buttonsLeft:"ugQLwSlbG4m6lN6U0nJkw",buttonsRight:"_6E420KZBuy6CQ1-o4Lvdq",btnMult:"_16i6eOz5rov4fQ17985HnO",title:"_12sqQ7ps1cDiagMHPDd_Px",gameCanvas:"_1KKFkjadMjMLy2lh_Xf81R",paddle1:"_1A3q8tbty0uYv557h434X-",paddle2:"_19hWFVuPcPNUiBVkcwXAI0",ball:"z-XJK_8FiQFKIQ1i2Rw68",scoreP1:"_2_SP1t02hd6U8m-i5sSPOW",scoreP2:"_3ZThKNG4qt19GBJWF49AVo",middleLine:"_1JXEO3vhBfh7yFCJhFOD42",cancelIcon:"RcL2x93K9zEDPXpi-fafB",clickAnimation:"kh7MO831qOBu7xI6mGtvB",clickDisabled:"_2FLR5ng4gDXx5Ns4vzlPy7",rotation:"yV6fxmjmoAOHLJ2d8pgAD",scaleout:"_3CsDi3Nid4T8dwECKWxAGv",scalein:"_3MTTK_GluPW6-SATGxBAF",fadeIn:"_1NguneUp2bdwiMHUZ2D-ah",iagh:"_3n85UyZZItbePLA7SnGEeY"}},781:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d=a(1),s=l(d),i=a(195),r=l(i);t.default=function(e){return s.default.createElement(r.default,n({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m20 5c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z m0 26.7c-6.4 0-11.7-5.3-11.7-11.7s5.3-11.7 11.7-11.7 11.7 5.3 11.7 11.7-5.3 11.7-11.7 11.7z m1.2-11.7l4.4-4.4c0.3-0.3 0.3-0.9 0-1.2-0.3-0.3-0.9-0.3-1.2 0l-4.4 4.4-4.4-4.4c-0.3-0.3-0.9-0.3-1.2 0-0.3 0.3-0.3 0.9 0 1.2l4.4 4.4-4.4 4.4c-0.3 0.3-0.3 0.9 0 1.2 0.2 0.2 0.4 0.2 0.6 0.2s0.4 0 0.6-0.2l4.4-4.4 4.4 4.4c0.2 0.2 0.4 0.2 0.6 0.2s0.4 0 0.6-0.2c0.3-0.3 0.3-0.9 0-1.2l-4.4-4.4z"})))},e.exports=t.default}});