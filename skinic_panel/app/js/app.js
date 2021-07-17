// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
// FULL CALENDAR


document.addEventListener('DOMContentLoaded', () => {

	$(window.location.hash).addClass('active').siblings().removeClass('active')

	
		const order = $('.side-bar__list .click-item.active').attr('data-order')
		console.log(order)
		$('.minimized .side-bar__list .click-item').eq(order).addClass('active')
		


	mainText = $('.global-content__core').attr('data-name')

	if( mainText == 'Clients') {
		$('.slider').slick({
		    slidesToShow: 6,
		    slidesToScroll: 2,
		    infinite: false,
		    arrows: false,
		    responsive: [{
		        breakpoint: 1024,
		        settings: {
		            slidesToShow: 3,
		            slidesToScroll: 2
		        }
		    }]
		});
	}
	$('.click-item').click(function() {

		$(this).addClass('active').siblings('').removeClass('active')

		if($('.edit-list').hasClass('active')) {
			$('.edit-logo').addClass('edit')
		} else {
			$('.edit-logo').removeClass('edit')
		}
	})
	if ($('.gallery-page__gallery').hasClass('gallery')) {
		$('.gallery-button').magnificPopup({
		    gallery: {
		        enabled: true
		    },
		    type: 'image'
		});
		return
	}

	$('.remove-photo').click(function() {
		$('.slider li').toggleClass('editable')
	})

	$('.delete-button').click(function() {
		$(this).parents('.slick-slide').css('display', 'none');
	})

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var text = document.getElementById('headText')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    mainText = $('.global-content__core').attr('data-name')
    if( mainText == 'Report') {
        mainText = 'Report for ' + monthNames[today.getMonth()] + ' ' + yyyy
        $('.global-content__core').addClass('reports-mode')
        $('.content-wrapper__header').css('display', 'none');
        $('.global-content__title p').css('display', 'none');
        $('#headText').text(mainText)
    }
    today = 'Today ' + monthNames[today.getMonth()] + ' ' + dd + ' st, ' + yyyy;

    text.innerHTML = today

    if( $('.flex-table__days').hasClass('in-view') ) {
        $('#homePage').addClass('active')
        $('.global-content__header').addClass('home-page-mode')
        console.log('sdsds')
        $('.content-wrapper').addClass('home')
    }

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
	if( mainText == 'My Account') {
		$('.global-content__title p').css('display', 'none')
	}

	// IF HOME
	if($('.flex-table__days').hasClass('in-view')) {
		$('.clients-mobile-only').remove()
		$('.global-content__home-only').addClass('home')
		$('.modal-details__head .clients-mode').css('display', 'none');
	}
	if( $('.personal-info__info').hasClass('info-form') ) {
		$('.content-wrapper__header').css('display', 'none');
	}


	$('.select').select2()

	if ($(window).width() > 1024) {
		$('.side-bar__hamburger').click(function() {
			$('.page').toggleClass('wide')
		})
	}
	if ($(window).width() < 768) {
		$('.side-bar__hamburger').click(function() {
			$('.page__left-side').toggleClass('active')
			$(this).find('span').toggleClass('active')
		})
		$('.mobile-slider').slick({
			arrows: false,
			centerMode: false,
			infinite: false,
			centerPadding: '10px',
			slidesToShow: 2,
			slidesToScroll: 2

		})
		$('.mobile-slider2').slick({
			centerPadding: '10px',
			centerMode: true,
			infinite: false,
			arrows: false,
			slidesToScroll: 2,
			slidesToShow: 2,
			infinite: true

		})
		
		
	}

	// HEADER BUTTONS CLICK
	$('.NA-btn').click( function() {
		$('.animated__order .step-item').removeClass('in-view').eq(0).addClass('in-view')
		$('.calendar-min-section').addClass('in-view')
		$('.modal').addClass('visible')
		$('.modal-new-appt').addClass('active')
		if ( $(this).hasClass('swap')) {
				$('.modal-details').removeClass('active')
		}
	})
	$('.invite-client-button').click( function() {
		$('.modal').addClass('visible')
		$('.modal-block-invite').addClass('active')
		if ( $(this).hasClass('swap')) {
				$('.modal-details').removeClass('active')
		}
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

	  if($(event.target).closest('.info__photos__gallery').length == 0)
	  {
	   $('.slider li ').removeClass('editable')
	   return
	  }        f
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
			//  $('.calendar-min-section').addClass('in-view')
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
		$('.day-button').addClass('active').siblings().removeClass('active')
		// $('#calendar').css('display', 'none');
	})
	$('.global-calendar-button').click(function(){
		$('.flex-table__list').removeClass('in-view')
	})


	// modal head reset steps
	$('.modal-details__head .click-item').click(function() {
		$('.step-item').removeClass('in-view').eq(0).addClass('in-view')
		$('.modal-details__create-note').removeClass('visible')
		$('.add-note').removeClass('active')
		$('.reschedule-block--step2 .next-step').addClass('disabled')
		$('.form .click-item').removeClass('active')
		$('.step-textarea').val('')
	})

	$('.block-nav .click-item').click(function() {
		$('.block-nav .click-item').removeClass('active')
		$(this).addClass('active')
	})
	




	

	// FLEX TABLE SLOT CLICK
	// $('.clients-table .table-slot').click(function(){
	// 	$('.modal-details').addClass('clients-mode')
	// })

	$('.table-slot').click(function() {
		if($(this).hasClass('block-hours')) {
			$(this).off('click')
		}
		if ($(window).width() < 768) {
			$('.mobile-slider').slick('setPosition');
			$('.mobile-slider2').slick('setPosition');
		}
		if($(this).hasClass('clients-mode')) {
			// if ( $(window).width() < 768) {
				// $('.mobile-slider').slick('slickAdd','<li class="click-item NA-btn"><span class="hover mobile-NA-btn">New Appointment</span></li>');
			// }
			if(event.target.closest('.NA-btn')) {
				$('.modal-details').removeClass('active')
				return
			}
			$('.modal-details').addClass('clients-mode')
			$('.clients-mode .NA-btn').addClass('swap')
			$('.slider').slick('setPosition');
		}
		$('.add-note').removeClass('active')
		$('.modal').addClass('visible')
		$('.modal-details__head .click-item').removeClass('active')
		$('.modal-details__create-note').removeClass('visible')
		$('.modal-details').addClass('active')
		$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		$('.steps-item').removeClass('in-view').eq(0).addClass('in-view')

	})




	// buttons next prev

	$('.close-button').click(function() {
		setTimeout(function() { 
				$('.modal').removeClass('visible') 
		}, 200);
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
	$('.NA-back-button').click(function() {
		console.log('check')
		$('.modal-new-appt').removeClass('active')
		setTimeout(function() { 
				$('.modal').removeClass('visible') 
		}, 200);

	})
	
	$('.back-button').click(function() {
		console.log('sdsds')
		$('.edit-logo').removeClass('edit')
		$('.modal-details__create-note').removeClass('visible')

	
		// CLOSE	MODAL
  
		if($('.home__block').hasClass('in-view')) {
	
			setTimeout(function() { 
				$('.modal').removeClass('visible') 
			}, 200);

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
	var checkin2 = document.querySelectorAll('#checkin2');
	var checkoff = document.querySelectorAll('#checkoff');

	const picker = datepicker('#checkin', {
		  // Event callbacks.
		  onSelect: instance => {
		    $('#checkoff').next().removeClass('qs-hidden')
		  }
		})
	checkoff.forEach(function(el) {
		    datepicker(el)
	})
	checkin2.forEach(function(el) {
		    datepicker(el)
	})


	

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
		$('.add-note-general').addClass('active')
		$('.modal-details__create-note').addClass('visible')
		if($('.modal-details__create-note').hasClass('visible')) {
			$(this).addClass('active')
		}

	})

	$('.modal-details__buttons span').click(function() {
		$('.modal-details__create-note').removeClass('visible')
		$('.add-note-general').removeClass('active')
		if(!$('.modal-details__create-note').hasClass('visible')) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})

	$('.modal-details__head .click-item').click(function() {
	    $('.info__wrapper__block').removeClass('in-view').eq($(this).attr('data-index')).addClass('in-view');
		let that = this
		// if (!$(that).parents('.slick-slide').hasClass('slick-active')) {
		if($(window).width() < 768) {
			$('.modal-details__head .click-item').removeClass('active')
			$(this).addClass('active')
		}

		// }
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
$('.calendar-nav').click(function(){
	if ( $('.fc-today-button').attr('disabled')) {
		$('.day-button').addClass('disabled')
	} else {
		$('.day-button').removeClass('disabled')
	}
	if(!$('.global-list-button').hasClass('active')) {
		if ($(this).hasClass('day-button')) {
			$('.fc-today-button').click ()
		}
		if ($(this).hasClass('week-button')) {
			$( '.fc-timeGridWeek-button' ).click ()
		}
		if ($(this).hasClass('month-button')) {
			$( '.fc-dayGridMonth-button' ).click ()
		}
		if ($(this).hasClass('TWM__arrow--prev')) {
			$( '.fc-prev-button' ).click ()
		}
		if ($(this).hasClass('TWM__arrow--next')) {
			$( '.fc-next-button' ).click ()
		}
	}
})

$('.browse-files').click(function() {
	$(".upload").click();
})
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#newImgGallery').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#newImg').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}
$("#addImgGallery").change(function(){
    readURL(this);
    $(this).parent().addClass('added')
});
$("#imgInp").change(function(){
    readURL2(this);
});

document.getElementById('cal-button').onclick = function(){
	$('.week-button').addClass('active').siblings().removeClass('active')
	if($('#homePage').hasClass('active')) {

	    var mainText = $('.global-content__core').attr('data-name')
	    var calendarEl = document.getElementById('calendar');
	    var calendar = new FullCalendar.Calendar(calendarEl, {
	      initialView: 'timeGridWeek',
	       initialDate: "2021-07-16",
	      selectable: true,
	      editable: true,
	      eventContent: function( arg ) {
	            return { html: arg.event.title };
	       },
	      events: [
	            {
	              id: 1,
	              title: '<div class="widget widget--violet"><span>Dr. med. Dan Iselin</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
	              start: '2021-07-16 07:00:00',
	              end: '2021-07-16 09:00:00'
	            },
	            {
	              id: 2,
	              title: '<div class="widget widget--red"><span>Dr. med. Dan Iselin</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
	              start: '2021-07-15 10:00:00',
	              end: '2021-07-15 09:00:00'
	            },
	                  {
	              id: 3,
	              title: '<div class="widget widget--green"><span>Dr. med. Dan Iselin</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
	              start: '2021-07-16 07:00:00',
	              end: '2021-07-16 09:00:00'
	            },
	                  {
	              id: 4,
	              title: '<div class="widget widget--blocked-hours"><h2>Blocked Hours</h2><span class="duration">90min</span></div',
	              start: '2021-07-16 14:00:00',
	              end: '2021-07-16 15:00:00'
	            }
	          ],
	      headerToolbar: {
	            center: 'today,timeGridWeek,dayGridMonth,prev,next',
	        }
	    });
	}
	calendar.render();


	document.getElementById('home-table-button').onclick = function(){
		calendar.destroy();
	}
}

// MEDIA JS


$('.side-bar__list .click-item').click(function() {
	$('.page__left-side').removeClass('active')
	$('.page__left-side').css("transition", "0s")
	$('.side-bar__hamburger span').toggleClass('active')
})


function throttle(cb, interval) {
	var now = Date.now();
	return function() {
	  if ((now + interval - Date.now()) < 0) {
		cb();
		now = Date.now();
	  }
	}
  }

var lastScrollTop = 0;
function scrollFunction() {
	var currentScrollTop = $(window).scrollTop();
	console.log(currentScrollTop)
	if (currentScrollTop > 200 && currentScrollTop > lastScrollTop){	
		console.log('sdasdsdsds')
		$('.content-wrapper__header').addClass('hidden')
	} else {
	  $('.content-wrapper__header').removeClass('hidden')
	}
	lastScrollTop = currentScrollTop;
}

window.onscroll = throttle(scrollFunction, 500);

//VANILLA JAVASCRIPT DRAG AND DROP

let file;

const dragArea = document.querySelector('.info__photos__drag-and-drop')

dragArea.addEventListener("dragover", (event)=> {
	event.preventDefault();
})

dragArea.addEventListener("dragleave", ()=> {
})

dragArea.addEventListener("drop", (event)=> {
	event.preventDefault();
	file = event.dataTransfer.files[0]
	let fileType = file.type
	let validExtensions = ['image/png', 'image/jpg']
	var fileReader = new FileReader();

	fileReader.onload = ()=> {
		let fileURL = fileReader.result
		document.getElementById('newImg').setAttribute('src', fileURL)
		// let imgTag = `<img src="${fileURL}" alt="">`
		// dragArea.innerHTML = imgTag
	}


	if (fileReader.readAsDataURL) {
		fileReader.readAsDataURL(file);
	} else if (fr.readAsDataurl) {
		fileReader.readAsDataurl(file);
	}
})


// SCREENSHOT





// DATA TABLE

$(document).ready(function() {
  
 
  
  var table = $('#data-table').DataTable({ 
        
    });//End of create main table

  
  $('#example tbody').on( 'click', 'tr', function () {
   
    alert(table.row( this ).data()[0]);

} );
});


  document.addEventListener('DOMContentLoaded', function() {     
});   