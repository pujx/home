$(function(){

	const container = document.getElementById('app');

	const options = {
		onSpeedUp: (ev) => {},
		onSlowDown: (ev) => {},
		// mountainDistortion || LongRaceDistortion || xyDistortion || turbulentDistortion || turbulentDistortionStill || deepDistortionStill || deepDistortion
		distortion: xyDistortion,

		length: 200,
		roadWidth: 50,
		islandWidth: 2,
		lanesPerRoad: 3,

		fov: 90,
		fovSpeedUp: 150,
		speedUp: 3,
		carLightsFade: 0.4,

		totalSideLightSticks: 50,
		lightPairsPerRoadWay: 30,

		// Percentage of the lane's width
		shoulderLinesWidthPercentage: 0.05,
		brokenLinesWidthPercentage: 0.1,
		brokenLinesLengthPercentage: 0.5,

		/*** These ones have to be arrays of [min,max].  ***/
		lightStickWidth: [0.02, 0.05],
		lightStickHeight: [0.3, 0.7],

		movingAwaySpeed: [20, 50],
		movingCloserSpeed: [-150, -230],

		/****  Anything below can be either a number or an array of [min,max] ****/

		// Length of the lights. Best to be less than total length
		carLightsLength: [400 * 0.05, 400 * 0.2],
		// Radius of the tubes
		carLightsRadius: [0.03, 0.08],
		// Width is percentage of a lane. Numbers from 0 to 1
		carWidthPercentage: [0.1, 0.5],
		// How drunk the driver is.
		// carWidthPercentage's max + carShiftX's max -> Cannot go over 1. 
		// Or cars start going into other lanes 
		carShiftX: [-10.5, 10.5],
		// Self Explanatory
		carFloorSeparation: [0, 0.1],

		colors: {
			roadColor: 0xffffff,
			islandColor: 0xffffff,
			background: 0xf2f2f2,
			shoulderLines: 0xffffff,
			brokenLines: 0xffffff,
			backgroundCanvas: 0xffffff,
			/***  Only these colors can be an array ***/
			leftCars: [0x555555, 0x274988, 0x353535],
			rightCars: [0x555555, 0x274988, 0x353535],
			sticks: 0x363636,
		}
	};

	const myApp = new App(container, options);
	myApp.loadAssets().then(myApp.init)
	
});