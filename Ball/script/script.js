let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let height = canvas.height;
let width = canvas.width;

//конструктор для мяча
const Ball = function(x, y, radius, xSpeed, ySpeed, color){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.color = color;
};

//рисование мяча
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

//запуск анимации с частотой кадров = 33 fps
let ball1 = new Ball(200, 100, 10, 1, -4, 'red');
let ball2 = new Ball(100, 200, 10, -3, -1, 'green');
// let ball3 = new Ball(200, 300, 10, 3, -4, 'blue');
// let ball4 = new Ball(300, 200, 10, -5, -2, 'purple');

setInterval(function(){
	ctx.clearRect(0, 0, width, height); //закоментив эту строку - шары будут оставлять за собой след траектории

	ball1.draw();
	ball1.move();
	ball1.checkCollision();

	ball2.draw();
	ball2.move();
	ball2.checkCollision();

	// ball3.draw();
	// ball3.move();
	// ball3.checkCollision();

	// ball4.draw();
	// ball4.move();
	// ball4.checkCollision();

	ctx.strokeStyle = 'black';
	ctx.strokeRect(0, 0, width, height);
}, 30);