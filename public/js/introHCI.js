'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// get the DIV to add content to
	$('#deleteFromWishlist').click(function(e) {
		var nametext = $('#name').text();
		var name = {
			'name' : nametext
		}
		$.post('/wishlist/delete', name, function() {
			window.location.href = '/wishlist';
		});
	});

	$('#newItemWishlist').click(function(e) {
		console.log('clicked');
		var name = $('#itemName').text();
		var image_url = $('#imageURL').attr('src');
		var json = {
			'name': name,
			'imageURL': image_url
		};

		$.post('/wishlist/new', json, function() {
		   window.location.href = '/wishlist'; // load the page
		});
	});
}
