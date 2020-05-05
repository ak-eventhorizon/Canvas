'use strict';

let canvas = document.getElementById('solar_system');
let context = canvas.getContext('2d');
context.canvas.width  = canvas.clientWidth;
context.canvas.height = canvas.clientHeight;
context.lineWidth = 0.3;

//единица измерения - одна тысячная стороны квадрата Canvas
//изначально - использовался холст 1000x1000px
let unit = canvas.clientWidth / 1000;

//текущий год (один оборот Земли вокруг солнца)
let year = 0;

//конструктор для создания <img> с атрибутом src
function ImagePlanet(src){
	let img = new Image();
	img.src = src;
	return img;
}

//соотношение орбит и радиусов планет в этой группе 1:1
let sun = {
	x: 500*unit,
	y: 500*unit,
	radius: 50*unit,
	color: '#f5de5d',
	img: ImagePlanet('img/sun.png')
};

let mercury = {
	x: 557*unit,
	y: 500*unit,
	radius: 3*unit,
	color: '#a6a4a2',
	orbit: 57*unit,
	img: ImagePlanet('img/mercury.png')
};

let venus = {
	x: 608*unit,
	y: 500*unit,
	radius: 9.5*unit,
	color: '#e0c396',
	orbit: 108*unit,
	img: ImagePlanet('img/venus.png')
};

let earth = {
	x: 650*unit,
	y: 500*unit,
	radius: 10*unit,
	color: '#abd4d0',
	orbit: 150*unit,
	img: ImagePlanet('img/earth.png')
};

let mars = {
	x: 728*unit,
	y: 500*unit,
	radius: 5*unit,
	color: '#873e2e',
	orbit: 228*unit,
	img: ImagePlanet('img/mars.png')
};


//орбиты и радиусы этой группы аутентичного соотношения не имеют

let jupiter = {
	x: 820*unit,
	y: 500*unit,
	radius: 30*unit,
	color: '#ceb193',
	orbit: 320*unit,
	img: ImagePlanet('img/jupiter.png')
};

let saturn = {
	x: 890*unit,
	y: 500*unit,
	radius: 33*unit,
	color: '#e0d8cc',
	orbit: 390*unit,
	img: ImagePlanet('img/saturn.png')
};

let uran = {
	x: 945*unit,
	y: 500*unit,
	radius: 13*unit,
	color: '#3994e3',
	orbit: 445*unit,
	img: ImagePlanet('img/uran.png')
};

let neptun = {
	x: 980*unit,
	y: 500*unit,
	radius: 11*unit,
	color: '#05459e',
	orbit: 480*unit,
	img: ImagePlanet('img/neptun.png')
};


//функция по отрисовке планеты
let drawPlanet = function(obj){
	context.drawImage(obj.img, obj.x - obj.radius, obj.y - obj.radius, obj.radius * 2, obj.radius * 2);
};


//вращение на grad градусов
let setAngle = function(grad){

	//очистка canvas
	context.clearRect(0, 0, canvas.width, canvas.height); 

	//рисуем орбиты планет
	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, mercury.orbit, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, venus.orbit, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, earth.orbit, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, mars.orbit, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, jupiter.orbit, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, saturn.orbit, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, uran.orbit, 0, Math.PI * 2, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'white';
	context.arc(sun.x, sun.y, neptun.orbit, 0, Math.PI * 2, false);
	context.stroke();

	//********Солнце********
	drawPlanet(sun);

	//***************отрисовка планет со смещением grad***************
		
	//********Меркурий********
	//отношение года на Земле к году на Меркурии = 4.1

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad * 4.1); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(mercury);
		
	context.restore(); //восстановить состояние контекста

	//********Венера********
	//отношение года на Земле к году на Венере = 1.6

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad * 1.6); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(venus);
		
	context.restore(); //восстановить состояние контекста

	//********Земля********

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(earth);
		
	context.restore(); //восстановить состояние контекста

	//********Марс********
	//отношение года на Земле к году на Марсе = 0.5

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad * 0.5); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(mars);
		
	context.restore(); //восстановить состояние контекста

	//********Юпитер********
	//отношение года на Земле к году на Юпитере = 0.085

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad * 0.085); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(jupiter);
		
	context.restore(); //восстановить состояние контекста

	//********Сатурн********
	//отношение года на Земле к году на Сатурне = 0.0365

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad * 0.0365); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(saturn);
		
	context.restore(); //восстановить состояние контекста
		
	//********Уран********
	//отношение года на Земле к году на Уране = 0.0121

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad * 0.0121); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(uran);
		
	context.restore(); //восстановить состояние контекста

	//********Нептун********
	//отношение года на Земле к году на Нептуне = 0.006

	context.save(); //сохранить состояние контекста
	context.translate(sun.x, sun.y); //сместить центр отсчета в центр солнца
	context.rotate(Math.PI / 180 * grad * 0.006); //повернуть контекст на grad градусов относительно центра по часовой
	context.translate(-sun.x, -sun.y); //вернуть центр отсчета в начало координат

	//рисуем планету
	drawPlanet(neptun);
		
	context.restore(); //восстановить состояние контекста
};



//увеличение летоисчисления

let yearCount = function(){
	document.getElementById('timer').innerText = `Year: ${++year}`;
};


		
//рекурсивный цикл увеличения градусов поворота
// speed - интервал отрисовки (чем меньше тем быстрее)
// ПОТЕНЦИАЛЬНАЯ ПРОБЛЕМА - i увеличивается бесконечно

let rotateWithSpeed = function(speed){
	let i = 0;

	function f(){
		setAngle(i);
		i++;

		//триггер тысячных отсечек
		if(i%360 === 0){yearCount();}

		setTimeout(f, speed);
	}
	f();
};




// window.onload = function(){
// 	setAngle(0);
// 	rotateWithSpeed(41); // такая частота дает примерно 24 fps
// };
export {setAngle, rotateWithSpeed};

