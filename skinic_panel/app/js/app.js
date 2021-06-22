// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$(window.location.hash).addClass('active').siblings().removeClass('active')


	var mainText = $('.global-content__core').attr('data-name')
	if(!$('#homePage').hasClass('active')) {
		$('#headText').text(mainText)	

	}

	if( mainText == 'Doctors') {
		var digit = 1700
		$('.global-content__title p').text(digit + ' ' + 'Clients')
	} else {
		var appDigit = 13
		$('.global-content__title p').text(appDigit + ' ' + 'appointments')
	}

	if($('.flex-table__days').hasClass('in-view')) {
		$('.global-content__home-only').addClass('home')
	}


	$('.select').select2()

	$('.side-bar__hamburger').click(function() {
		$('.page').toggleClass('wide')
	})

	$('.click-item').click(function() {

		$(this).addClass('active').siblings('').removeClass('active')

		if($('.modal-details__head ul li').eq(1).hasClass('active')) {
			$('.edit-logo').addClass('edit')
		} else {
			$('.edit-logo').removeClass('edit')
		}
	})

	// HEADER BUTTONS CLICK
	$('.NA-btn').click( function() {
		$('.animated__order .step-item').removeClass('in-view').eq(0).addClass('in-view')
		$('.modal').addClass('visible')
		$('.modal-new-appt').addClass('active')
	})

	$('.back-to-date-button').click(function() {
		$('.animated__order .step-item').removeClass('in-view').eq(0).addClass('in-view')
	})

	$('#BH-btn').click( function() {
		$('.step-textarea').val('')
		$('.modal').addClass('visible')
		$('.modal-block-hours').addClass('active')
	})

	// FILTER CALENDAR BUTTONS
	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if($(event.target).closest('.content-wrapper__filter-calendar').length == 0)
	  {
	  	$('.filter-container').removeClass('active')
	   $('.filter-calendar-buttons').removeClass('active')
	  }        
	});

	$('#open-filter').click(function() {
		$('.filter-container').addClass('active')
	})





	// ACARDEOUN

	$('.headings li h4').click(function() {
	    $(this).parent().toggleClass('active')
	    $(this).toggleClass('active');
	    $(this).next('.animated').slideToggle(300)
	    $(this).parent().siblings().removeClass('active')
	    $(this).parent().siblings().find('.animated').slideUp(300)
	    $(this).parent().siblings().find('h4').removeClass('active')

	    var that = $(this)
	    window.setTimeout(function() {
	        $('html, body').animate({
	            scrollTop: that.offset().top - 100
	        });
	    }, 400)
	});
	$('#sel4').on('select2:select', function (e) { 
	     	$(this)
	     	.parent().slideUp(300)
	     	.prev().removeClass('active')
	     	.parents('li').next().find('h4').addClass('active')
	     	.next().slideToggle(300)
	});
	$('.animated__steps .click-item').click(function() {
		$(this)
			.parents('.animated').slideUp(300)
			.parents('li').find('h4').removeClass('active')
			.parents('li').next().find('h4').addClass('active')
			.next().slideDown(300)

	})

	// $(document).on("click",".", function(){
	//     $('.timePicker').removeClass('disabled')
	//    $('.timeSelect').select2('open');
	// });




	$('.calendar-min-section .cal-next-step').click(function () {
		$('.animated__steps.in-view').next().addClass('in-view').siblings().removeClass('in-view')
	})


	// home table change content
	$('.global-list-button').click(function(){
		$('.flex-table__list').removeClass('in-view').eq(0).addClass('in-view');
		$('#calendar').css('display', 'none');
	})
	$('.global-calendar-button').click(function(){
		$('.flex-table__list').removeClass('in-view').eq(1).addClass('in-view');
		// $('#calendar').fullCalendar('render');
	})



	// modal head reset steps
	$('.modal-details__head .click-item').click(function() {
		$('.step-item').removeClass('in-view').eq(0).addClass('in-view')
		$('.modal-details__create-note').removeClass('visible')
		$('.reschedule-block--step2 .next-step').addClass('disabled')
		$('.form .click-item').removeClass('active')
		$('.step-textarea').val('')
	})


	

	// FLEX TABLE SLOT CLICK
	// $('.clients-table .table-slot').click(function(){
	// 	$('.modal-details').addClass('clients-mode')
	// })

	$('.table-slot').click(function() {
		if($(this).hasClass('block-hours')) {
			$(this).off('click')
		}
		$('.modal').addClass('visible')
		$('.modal-details__head .click-item').removeClass('active')
		$('.modal-details__create-note').removeClass('visible')
		$('.modal-details').addClass('active')
		$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		$('.steps-item').removeClass('in-view').eq(0).addClass('in-view')
	})


	// buttons next prev

	$('.close-button').click(function() {
		$('.modal').removeClass('visible')
		$('.modal-block').removeClass('active')	
	})
	$(document).on("keyup", function (e) { 
	  if (e.keyCode === 27) { 
	    $('.modal').removeClass('visible')
			$('.modal-block').removeClass('active')	
			$('.filter-calendar-buttons').removeClass('active')
			$('.filter-container').removeClass('active')
			$('.qs-datepicker-container').addClass('qs-hidden')
			
	  }
	});

	$('.back-button').click(function() {
		$('.edit-logo').removeClass('edit')
		$('.modal-details__create-note').removeClass('visible')

	
		// CLOSE	MODAL
  
		if($('.home__block').hasClass('in-view')) {
	
			$('.modal').removeClass('visible')
			$('.modal-block').removeClass('active')	
			$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
			$('.modal-details__head .click-item').removeClass('active')
		}
		// CLOSE	MODAL END


		// RESCHEDULE	MODAL
		if ($('.reschedule-block--step4').hasClass('in-view')) {
			$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		}
		if ($('.reschedule-block--step1').hasClass('in-view') && $('.reschedule-block').hasClass('in-view') ) {
					$('.modal-details__head .click-item').removeClass('active')
					
					$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
					return
			}

		if ($('.reschedule-block').hasClass('in-view')) {
			$('.step-item.in-view').prev().addClass('in-view').siblings().removeClass('in-view')
		}
		if (!$('.reschedule-block').hasClass('in-view')) {
			$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')	
			$('.modal-details__head .click-item').removeClass('active')
		}
		
	})

	// $('.inside-button').click(function(){
	// 	$('.step-item').removeClass('in-view').prev().addClass('in-view')
	// })



	//datepicker
	$(document).on("click",".qs-square", function(){
	    $('#open-calendar').removeClass('active')
	});
	datepicker("#open-calendar",{})

	var checkin = document.querySelectorAll('#checkin');
	var checkoff = document.querySelectorAll('#checkoff');

	const picker = datepicker('#checkin', {
		  // Event callbacks.
		  onSelect: instance => {
		    $('#checkoff').next().removeClass('qs-hidden')
		  }
		})


	// checkoff.forEach(function(el) {
	// 	    datepicker(el)
	// })

	// $('.timepicker1').timepicker({
	// 	change: function(time) {
	// 		$( '.timepicker2' ).click()
	// 		$( '.timepicker2' ).focus()
			
	// 	}

	// });

	// $('input.timepicker1').timepicker({});
	// $('input.timepicker2').timepicker({});
	// $('.timepicker2').click(function(){
	// })

	$('.multiple-on-off').click(function(){
		$(this).toggleClass('multiple')
		$('.label-container__version').eq(1).toggleClass('active').siblings().toggleClass('active')
	})



	// modals
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

	$('.step-textarea').on('input', function () {
 	    if ( $(this).val().length > 0 ) {
 	    	$('.next-step').removeClass('disabled')
 	    } else
 	    	$('.next-step').addClass('disabled')	
	});

	$('.prev-step').click(function(e) {
		$(this).parents('.step-item').removeClass('in-view').prev().addClass('in-view')
	})

})


// SIMULATIN CLICKS FULL CALLENDAR
$('.TWM__days span').click(function(){
	if(!$('.global-list-button').hasClass('active')) {
		$('.day-button').click(function(){
			$( '.fc-today-button' ).click ()
		})
		$('.week-button').click(function(){
			$( '.fc-timeGridWeek-button' ).click ()
		})
		$('.month-button').click(function(){
			$( '.fc-dayGridMonth-button' ).click ()
		})

		$('.TWM__arrow--prev').click(function(){
			$( '.fc-prev-button' ).click ()
		})
		$('.TWM__arrow--next').click(function(){
			$( '.fc-next-button' ).click ()
		})
	}
})


// VANILLA JAVASCRIPT CALENDAR
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var text = document.getElementById('headText')
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = 'Today ' + monthNames[today.getMonth()] + ' ' + dd + ' st, ' + yyyy;
text.innerHTML = today

if(window.location.hash == false && $('.flex-table__days').hasClass('in-view')) {
	$('#homePage').addClass('active')
	
}

document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'timeGridWeek',
           initialDate: "2021-02-15",
          selectable: true,
          editable: true,
          eventContent: function( arg ) {
                return { html: arg.event.title };
           },
          events: [
                {
                  id: 1,
                  title: 'Conference<ul><li>Morning Committee Meetings</li><li>Networking Brunch</li><li>Concurrent Sessions</li><li>Evening Network Reception</li><li>Conference Closing</li></ul>',
                  start: '2021-02-15 07:00:00',
                  end: '2021-02-15 12:00:00'
                },
                {
                  id: 2,
                  title: 'Another <b>Entry with HTML</b>',
                  start: '2021-02-16 07:00:00',
                  end: '2021-02-16 08:00:00'
                },
                      {
                  id: 3,
                  title: '<i>Third Entry with HTML</i>',
                  start: '2021-02-16 09:00:00',
                  end: '2021-02-16 10:00:00'
                }
              ],
          headerToolbar: {
                center: 'today,timeGridWeek,dayGridMonth,prev,next',
      		}
        });
        calendar.render();

        calendarEl.style.display="none"

        document.querySelector('.global-calendar-button').addEventListener('click', () => {
          calendarEl.style.display="block"
        }); 


      });
