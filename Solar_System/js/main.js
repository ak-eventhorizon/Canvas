'use strict';

import * as starsBackground from './modules/stars_background.js';
import * as solarSystem from './modules/solar_system.js';



window.onload = function(){
	starsBackground.refreshCanvas();
	starsBackground.generateOrdinaryStars(500);
	starsBackground.generateGradientStars(10);

	solarSystem.setAngle(0);
	solarSystem.rotateWithSpeed(41); // такая частота дает примерно 24 fps
};

