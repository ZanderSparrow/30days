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
			description : 'A bare-bones implementation of SideComments.js. This one took a little over an hour.',
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
			description : 'Produces a jumbled essay by taking random sentences from various text files.',
			hash : '121515.html'
		}
	];
})();