// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$('.side-bar__list li a').click(function(event) {
	    event.preventDefault();
	});

	$('.click-item').click(function() {
		$(this).addClass('active').siblings('').removeClass('active')
	})


	// datepicker
	const picker = datepicker('#open-calendar', {
	})


	$('.side-bar__hamburger').click(function() {
		$('.page').toggleClass('wide')
	})




})
