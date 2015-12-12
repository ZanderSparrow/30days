

(function() {
	var app = angular.module('news', []);

	app.controller('NewsController', function() {
		this.stories = stories;
	});

	app.controller('CommentController', function() {
		this.comment = {};
		this.addComment = function(story) {
			story.comments.push(this.comment);
			this.comment = {};
		};
		
	});

	var stories = [
		{
			title : 'Lorem ipsum dolor',
			content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			comments : [
				{
					name : 'Henry',
					content : 'Wow! This is so great. I just love this story. I will share it with all of my friends right now.'
				},
				{
					name : 'Karl',
					content : 'Neat'
				}
			]
		},
		{
			title : 'At vero',
			content : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
			comments : []
		}
	];

})();

$(function() {
	$('section').on('click', '.click-box', function() {
		$(this).closest('.container').find('.comments').toggle();
	});
	$('section').on('click', '.add-comment', function() {
		$(this).hide();
		$(this).closest('.container').find('.comment-form').show();
	});
	$('section').on('submit', '.add-comment form', function(e) {
		e.preventDefault();
		console.log($('.input-name').val());
	});
});