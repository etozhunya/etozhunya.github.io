document.addEventListener('DOMContentLoaded', () => {
	
	if ($('body').hasClass('hash')) {
	    $(window.location.hash).addClass('active')
	    if( $(window.location.hash).length > 0 ) {
	    	$('.containerWrapper__One').addClass('in-view').siblings().removeClass('in-view')
	    }
	    $('.greetings').click(function(){
	    	$('.sub-steps li').removeClass('active')
	    	$('.containerWrapper__Two').addClass('in-view').siblings().removeClass('in-view')
	    	$('.steps li').removeClass('active')
	    })

	}

	$(function () {
	  $('.bs-timepicker').timepicker();
	});


	if ($('body').hasClass('haveSelect')) {
	        $('.select2').select2();
	}

	// account buttons

	
	$('.edit').click(function() {
		var currentInput = $(this).parent().next('input')
		var buttons = $(this).parent().next().next('.short')
		buttons.addClass('visible')
		$(this).parent().parent().addClass('editable')
		$(this).focus()
		currentInput.addClass('editable')
		if( currentInput.hasClass('editable') ) {
			currentInput.prop('readonly', false)
		} else
			currentInput.prop('readonly', true)

	    $('.deliverEdit').removeAttr('disabled')	
	})
	$('.close').click(function() {
		var buttons = $(this).parent().next().next('.short')
		var currentInput = $(this).parent().next('input')
		currentInput.removeClass('editable')
		$(this).parent().parent().removeClass('editable')
		buttons.removeClass('visible')
	    $('.deliverEdit').attr('disabled', true)
	})
	$('.button').click(function(){
		$(this).parents('.AASwrapper').removeClass('editable')
		$(this).parents('.short').removeClass('visible')

	})


	// var index
	// for (index = 0; index < 12; index++) {
	//   // Запускается 5 раз, с шагом от 0 до 4.
	//   console.log(index);
	// }

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

	



	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if($(event.target).closest('.guests').length == 0)
	  {
	   $('.function').removeClass('active')
	  }        
	});

	if ($('body').hasClass('haveSlider')) {
				  if ($(window).width() < 1025) {
			        $('.slider').slick({
			          centerMode: true,
			          centerPadding: '60px',
			          slidesToShow: 1,
			          arrows: false,
			          responsive: [
			            {
			              breakpoint: 1025,
			              settings: {
			                arrows: false,
			                dots: true,
			                centerMode: true,
			                centerPadding: '0px',
			                slidesToShow: 1
			              }
			            }
			          ]
			        });
			    }
			    $('.slider3').slick({
			      infinite: true,
			      slidesToShow: 3,
			      slidesToScroll: 3,
			      dots: true,
			      centerPadding: '0px',
			      arrows: true,
			      responsive: [
			        {
			          breakpoint: 769,
			          settings: {
			            centerMode: true,
			            centerPadding: '0px',
			            slidesToShow: 1
			          }
			        },
			        {
			        	breakpoint: 767,
			        	settings: {
			        	  arrows: false,
			        	  slidesToShow: 1,
			        	  slidesToScroll: 1
			        	}
			        }
			      ]
			    });
			    $('.slider4').slick({
			      infinite: true,
			      slidesToShow: 1,
			      slidesToScroll: 1,
			      dots: true,
			      centerPadding: '0px',
			      responsive: [
			        {
			        	breakpoint: 767,
			        	settings: {
			        	  arrows: false,
			        	  slidesToShow: 1,
			        	  slidesToScroll: 1
			        	}
			        }
			      ]
			    });
	}
	$('.input').on('input', function () {
 	    if ( $('#confirmation').val().length > 0 && $('#address').val().length > 0 ) {
 	    	$('.deliverButton').removeClass('disabled')
 	    } else
 	    	$('.deliverButton').addClass('disabled')	
	});

	$('.toContactUs').click(function() {
		window.location.href = 'contactUs.html';
	})

	$('.section2 .hotelList__item').click(function() {
		$(this).addClass('active')
		if ($('.section2 .hotelList__item').hasClass('active')) {
			$('.next2').removeClass('disabled')
		}
	})

	$('.form label').click(function(){
		if( $('.timepicker-on').is(":checked")) {
			// $('.bs-timepicker').addClass('visible')
		}
		if ($(this).hasClass('active')) {
			$('.next3').removeClass('disabled')
		}
	})
	// $(document).on("click",".bs-timepicker", function(){
	// 	console.log('sadasd')
	// })

	$('.bs-timepicker').on('change', function () {
		console.log('asdasd')
		$('.timepicker-on').prop( "checked" )
	})
	$('.bs-timepicker').click( function(){

	    console.log('asdasd')
	})

	$('#adults').on('change', function () {
 	    if ( $(this).val() == 0  ) {
 	    	$(this).prev().addClass('disabled')
 	    } else
 	    	$(this).prev().removeClass('disabled')
	});
	$('#children').on('change', function () {
 	    if ( $(this).val() == 0  ) {
 	    	$(this).prev().addClass('disabled')
 	    } else
 	    	$(this).prev().removeClass('disabled')
	});

	$('.openCalc').click(function() {
		$('.function').toggleClass('active')
	})







	$('.calendarWrapper li').click(function() {
		$('.calendarWrapper li').removeClass('active')
		$(this).addClass('active')
	})

	if ( $('#adults').val() == 0 ) {
	    $('#adults').addClass('disabled')
	} else
		$('#adults').removeClass('disabled')
	

	$('.calc').click(function() {
	        var val = $(this).siblings('input').val();

	        if ($(this).val() == 'plus') {
	            val++;
	        } else if(val > 0) {
	            val--;
	        }
	        $(this).siblings('input').val(val).trigger('change');
	        var adults = $('#adults').val()
	        var children = $('#children').val()
	        $('#adultDigit').text(adults)
	        $('#childrenDigit').text(children)

	    })
	$(document).on("keyup", function (e) { 
	  if (e.keyCode === 13) { 
	    $('.function').removeClass('active');
	  }
	});
	if ($('.function').hasClass('active')) {
		$(document).on("click", function(e) {
		    if ($(e.target).is('.function') === false) {
		      $('.function').addClass('active2')
		    }
		  });
	}






	$('.next').click(function(e) {
		e.preventDefault()
		var index = $(this).attr('index')
		console.log(index)
		$(this).parent().removeClass('visible').next().addClass('visible')
		$('.slider3').slick('setPosition');
		$('.generalSteps li').removeClass('active').eq(index).addClass('active');

		var that = $(this)
		$('html, body').animate({
		    scrollTop: $('.title').offset().top + 200
		});
	})

	// $(document).on("click",".select2", function(){
	// 	console.log('asdsadssss')
	// 	$(this).parents('.animated').slideDown()
	// })		

	$('.specTable li').click(function() {
	    $(this).find('h4').toggleClass('active');
	    $(this).toggleClass('active');
	    $(this).siblings().find('.animated').slideUp()
	    $(this).siblings().removeClass('active')
	    if ($(this).hasClass('active')) {
	        $(this).find('.animated').slideDown();
	    } else
	        $(this).find('.animated').slideUp();
	});
	// $('.specTable li .table').click(function() {
	// 	if (!$(this).parent().hasClass('active')) {
	// 	    $(this).parent().find('.animated').slideDown();
	// 	} else
	// 	    $(this).parent().find('.animated').slideUp();
	// 	})

	$('.form input').click(function(){
            if($(this).prop("checked") == true){
            	$('.form label').removeClass('active')
                $(this).parent('label').addClass('active')
            }
        });
	
	$('.steps li').click(function() {
	    $(this).addClass('active').siblings().removeClass('active');
	    $('.sub-steps li').removeClass('active')
	    $('.tableWrapper').removeClass('in-view').eq($(this).attr('data-index')).addClass('in-view');
	});
	$('.sub-steps li').click(function() {
	    $(this).addClass('active').siblings().removeClass('active');
	});
	$('.preTable li').click(function() {
	    $(this).addClass('active').siblings().removeClass('active');
	});
	$('.AAS li').click(function() {
	    $(this).addClass('active').siblings().removeClass('active');
	    $('.AAScontent').removeClass('in-view').eq($(this).index()).addClass('in-view');
	});

	// GALLERY

	$('.play').click(function(e){
		e.preventDefault()
		$('.mainVideo').trigger('play')
		$('.mainVideo').prop("controls",true); 
	})


	$('.videoPart__gallery li').click(function() {
		console.log('asdsa')
        // $(this).addClass('active').siblings().removeClass('active');
        $('.videoPart__text').removeClass('active').eq($(this).index()).addClass('active');
        $('.videoPart__video img').removeClass('active').eq($(this).index()).addClass('active');
    });



	if( $('body').hasClass('haveDatePicker')) {
		var checkin = document.querySelectorAll('#checkin');
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
	}

})
