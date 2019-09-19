let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let height = canvas.height;
let width = canvas.width;



//функция рисования мяча
const circle = function(x, y, radius, color, fillCircle){
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2, false);
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	if(fillCircle){
		ctx.fill();
	} else {
		ctx.stroke();
	}
};



//конструктор для мяча
const Ball = function(x, y, radius, xSpeed, ySpeed, color){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.color = color;
};

//добавление метода рисования к прототипу класса Ball
Ball.prototype.draw = function(){
	circle(this.x, this.y, this.radius, this.color, true);
};

//добавление метода перемещения к прототипу класса Ball
Ball.prototype.move = function(){
	this.x += this.xSpeed;
	this.y += this.ySpeed;
};

//добавление метода проверки на столкновение с границей к прототипу класса Ball
Ball.prototype.checkCollision = function(){
	if (this.x < (0 + this.radius) || this.x > (width - this.radius)){
		this.xSpeed = -this.xSpeed;
	}
	if (this.y < (0 + this.radius) || this.y > (height - this.radius)){
		this.ySpeed = -this.ySpeed;
	}
};

//добавление метода определения направления движения по первому набору клавиш
Ball.prototype.setDirectionControlSet1 = function(direction){
	if (direction === 'up'){
		this.xSpeed = 0;
		this.ySpeed = -5;
	} else if (direction === 'down'){
		this.xSpeed = 0;
		this.ySpeed = 5;
	} else if (direction === 'left'){
		this.xSpeed = -5;
		this.ySpeed = 0;
	} else if (direction === 'right'){
		this.xSpeed = 5;
		this.ySpeed = 0;
	} else if (direction === 'space'){
		this.xSpeed = 0;
		this.ySpeed = 0;
	}
};

//добавление метода определения направления движения по второму набору клавиш
Ball.prototype.setDirectionControlSet2 = function(direction){
	if (direction === 'w'){
		this.xSpeed = 0;
		this.ySpeed = -5;
	} else if (direction === 's'){
		this.xSpeed = 0;
		this.ySpeed = 5;
	} else if (direction === 'a'){
		this.xSpeed = -5;
		this.ySpeed = 0;
	} else if (direction === 'd'){
		this.xSpeed = 5;
		this.ySpeed = 0;
	} else if (direction === 'shift'){
		this.xSpeed = 0;
		this.ySpeed = 0;
	}
};

//объект с соответствием кодов клавиш их названиям
let keyActions = {
	32: 'space',
	16: 'shift',

	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',

	87: 'w',
	65: 'a',
	83: 's',
	68: 'd'
};



let redBall = new Ball(200, 100, 10, 5, 0, 'red');
let greenBall = new Ball(100, 300, 10, -5, 0, 'green');



//обработчик события keydown через jQuery
$('body').keydown(function(event){

	let direction = keyActions[event.keyCode];

	redBall.setDirectionControlSet1(direction);
	greenBall.setDirectionControlSet2(direction);
});



//запуск анимации с частотой кадров = 33 fps
setInterval(function(){
	ctx.clearRect(0, 0, width, height); //закоментив эту строку - шары будут оставлять за собой след траектории

	redBall.draw();
	redBall.move();
	redBall.checkCollision();

	greenBall.draw();
	greenBall.move();
	greenBall.checkCollision();

	ctx.strokeStyle = 'black';
	ctx.strokeRect(0, 0, width, height);
}, 30); // 1 сек / 30 мс = 33 frame per second



