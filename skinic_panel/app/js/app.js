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

		if($('.modal-details__head ul li').eq(1).hasClass('active')) {
			$('.edit-logo').addClass('edit')
		} else {
			$('.edit-logo').removeClass('edit')
		}
	})



	// modal head reset steps
	$('.modal-details__head .click-item').click(function() {
		$('.step-item').removeClass('in-view').eq(0).addClass('in-view')
		$('.modal-details__create-note').removeClass('visible')
		$('.reschedule-block--step2 .next-step').addClass('disabled')
		$('.form .click-item').removeClass('active')
		$('#step-textarea').val('')

	})





	// datepicker
	const picker = datepicker('#open-calendar', {
	})

	$('.select').select2()

	$('.side-bar__hamburger').click(function() {
		$('.page').toggleClass('wide')
	})

	$('.table-slot').click(function() {
		if($(this).hasClass('block-hours')) {
			$(this).off('click')
		}
		$('.modal').addClass('visible')
		$('.modal-details__create-note').removeClass('visible')
		$('.modal-details').addClass('active')
		$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		$('.steps-item').removeClass('in-view').eq(0).addClass('in-view')
	})

	$('.close-button').click(function(){
		$('.edit-logo').removeClass('edit')
		$('.modal').removeClass('visible')
		$('.modal-block').removeClass('active')	
		$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		$('.modal-details__head .click-item').removeClass('active')
	})
	
	$('.back-button').click(function() {
		$('.edit-logo').removeClass('edit')
		$('.modal-details__create-note').removeClass('visible')
		if($('.home__block').hasClass('in-view')) {
			$(this).addClass('close-button')
		} else {
			$('.back-button').removeClass('close-button')
		}
		if ($(this).hasClass('close-button')) {
			$('.modal').removeClass('visible')
			$('.modal-block').removeClass('active')	
		}
		$('.modal-details__head .click-item').removeClass('active')
		$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')

	})



	$('.add-note').click(function() {
		$('.modal-details__create-note').addClass('visible')
	})

	$('.modal-details__buttons span').click(function() {
		$('.modal-details__create-note').removeClass('visible')
	})

	$('.modal-details__head .click-item').click(function() {
	    $('.info__wrapper__block').removeClass('in-view').eq($(this).index() + 1).addClass('in-view');
	});

	$('.calendarWrapper li').click(function() {
		$('.calendarWrapper li').removeClass('active')
		$(this).addClass('active')
	})
	$('.nextArrow').click(function() {
		$('.globalCalendar.visible').next().addClass('visible').siblings().removeClass('visible')
		if($('.globalCalendar:not(.visible)').length == 11) {
			$('.globalCalendar').eq(0).addClass('visible')
		}

	})
	$('.prevArrow').click(function() {
		$('.globalCalendar.visible').prev().addClass('visible').siblings().removeClass('visible')
		if($('.globalCalendar').eq(0).hasClass('visible')) {
			$('.globalCalendar').removeClass('visible')
			$('.globalCalendar').eq(10).addClass('visible')
		}

	})

	$('.next-step').click(function(e) {
		$(this).parents('.step-item').removeClass('in-view').next().addClass('in-view')
	})
	$('.form .click-item').click(function(){
		if ($(this).hasClass('active')) {
			$('.reschedule-block--step2 .next-step').removeClass('disabled')
		}
	})

	$('#step-textarea').on('input', function () {
 	    if ( $(this).val().length > 0 ) {
 	    	$('.next-step').removeClass('disabled')
 	    } else
 	    	$('.next-step').addClass('disabled')	
	});

	$('.prev-step').click(function(e) {
		$(this).parents('.step-item').removeClass('in-view').prev().addClass('in-view')
	})




})
