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
		}
	];
})();