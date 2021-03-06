(function() {
	var app = angular.module('day', []);

	app.controller('DayController', function() {
		this.challenges = challenges;
	});

	var challenges = [
		{
			date : '12/09/15',
			title : 'Hello, World!',
			description : 'An introductory page, to say hi to the world. Hey, world!',
			hash : '120915.html'
		},
		{
			date : '12/10/15',
			title : 'Advent Calendar',
			description : 'A simple countdown until Christmas, created with HTML, CSS, and jQuery.',
			hash : '121015.html'
		},
		{
			date : '12/11/15',
			title : 'Side Comments',
			description : 'A simplified implementation of SideComments.js.',
			hash : '121115.html'
		},
		{
			date : '12/12/15',
			title : 'Fun with p5',
			description : 'A little trial with the p5.js library.',
			hash : '121215.html'
		},
		{
			date : '12/13/15',
			title : 'Badger Ipsum',
			description : 'Generates Badger Badger Ipsum text.',
			hash : '121315.html'
		},
		{
			date : '12/14/15',
			title : 'Interactive Grid',
			description : 'Dispays a grid of squares that change color when clicked.',
			hash : '121415.html'
		},
		{
			date : '12/15/15',
			title : 'Word Soup',
			description : 'A jumbled essay of random sentences from various text files.',
			hash : '121515.html'
		},
		{
			date : '12/16/15',
			title : 'Hidden Boats',
			description : 'Find the red boats before you run out of guesses.',
			hash : '121615.html'
		},
		{
			date : '12/17/15',
			title : 'Data.gov and d3',
			description : 'A project using data from data.gov the d3 library.',
			hash : '121715.html'
		},
		{
			date : '12/18/15',
			title : 'Flip Time',
			description : 'A flip clock made with FlipClock.js.',
			hash : '121815.html'
		},
		{
			date : '12/19/15',
			title : 'Snow Cat',
			description : 'Nyan dashing through the snow.',
			hash : '121915.html'
		},
		{
			date : '12/20/15',
			title : 'Simon',
			description : 'A copy the color pattern game.',
			hash : '122015.html'
		},
		{
			date : '12/21/15',
			title : 'Parallax',
			description : 'An experiment with parallax scrolling.',
			hash : '122115.html'
		},
		{
			date : '12/22/15',
			title : 'Pig Latin',
			description : 'Translates text into pig latin.',
			hash : '122215.html'
		},
		{
			date : '12/24/15',
			title : 'Slide',
			description : 'A page with an expanding menu.',
			hash : '122415.html'
		},
		{
			date : '12/25/15',
			title : 'Bounce',
			description : 'A ball bouncing in a box.',
			hash : '122515.html'
		},
		{
			date : '12/26/15',
			title : 'Cryptosquare',
			description : 'Encrypts text.',
			hash : '122615.html'
		},
		{
			date : '12/27/15',
			title : 'Roman Numerals',
			description : 'Converts numbers to roman numerals.',
			hash : '122715.html'
		},
		{
			date : '12/28/15',
			title : 'Binary to Hex',
			description : 'Converts numbers in base ten to bases 2-16.',
			hash : '122815.html'
		},
		{
			date : '12/29/15',
			title : 'To Do List',
			description : 'An interactive to do list made with Angular.',
			hash : '122915.html'
		},
		{
			date : '12/30/15',
			title : 'The Ipsum Store',
			description : 'An online things store made with Angular.',
			hash : '123015.html'
		},
		{
			date : '12/31/15',
			title : 'Primes and factors',
			description : 'Finds the prime factors of an integer.',
			hash : '123115.html'
		},
		{
			date : '01/01/16',
			title : 'Color Slider',
			description : 'Use sliders to pick colors.',
			hash : '010116.html'
		},
		{
			date : '01/02/16',
			title : 'SPBPA',
			description : 'A simple game.',
			hash : '010216.html'
		},
		{
			date : '01/03/16',
			title : 'Date Picker',
			description : 'A calendar pops up.',
			hash : '010316.html'
		},
		{
			date : '01/04/16',
			title : 'Timing Game',
			description : 'Fun and/or frustration.',
			hash : '010416.html'
		},
		{
			date : '01/05/16',
			title : 'Markers',
			description : 'Draw a picture.',
			hash : '010516.html'
		},
		{
			date : '01/06/16',
			title : 'Leap Year',
			description : 'Find out if a year is one.',
			hash : '010616.html'
		},
		{
			date : '01/07/16',
			title : 'Caesar Cypher',
			description : 'A simple encryption program.',
			hash : '010716.html'
		},
		{
			date : '01/08/16',
			title : 'Pyramid',
			description : 'Choose a size, make a pyramid.',
			hash : '010816.html'
		},
	];
})();