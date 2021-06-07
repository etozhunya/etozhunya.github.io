document.addEventListener('DOMContentLoaded', () => {
  
	// $(document).on("click",".qs-square", function(){
	// 	console.log('asda')
	// 	$('.datePicker').next().toggleClass('none');
	// })
	

	if ($('body').hasClass('haveSlider')) {
				  if ($(window).width() < 1025) {
			        $('.slider').slick({
			          centerMode: true,
			          centerPadding: '60px',
			          slidesToShow: 1,
			          arrows: false,
			          responsive: [
			            {
			              breakpoint: 768,
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

	// $('#adults').on('input', function () {
 // 	    if ( $(this).val() == 0  ) {
 // 	    	console.log('11input')
 // 	    } 
	// });

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







	// if ( $('#adults').val() > 0 ) {
	// 		}
	// $('#adults').on('input', function () {
	// 		if ( $(this).val() > 0 ) {
	// 			console.log('sdasdasda')
	// 		}
	// })	

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

	    })


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


	$('.form input').click(function(){
            if($(this).prop("checked") == true){
            	$('.form label').removeClass('active')
                $(this).parent('label').addClass('active')
            }
        });
	
	$('.steps li').click(function() {
	    $(this).addClass('active').siblings().removeClass('active');
	    $('.tableWrapper').removeClass('in-view').eq($(this).index()).addClass('in-view');
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






	var checkin = document.querySelectorAll('#checkin');
	var checkoff = document.querySelectorAll('#checkoff');


	// checkin.forEach(function(el) {
	//     datepicker(el)
	//     onSelect: (instance, date) => {
	//     	console.log('asdsa')
	//      }
	// })
	const picker = datepicker('#checkin', {
	  // Event callbacks.
	  onSelect: instance => {
	    $('#checkoff').next().removeClass('qs-hidden')
	  }
	})


	checkoff.forEach(function(el) {
	    datepicker(el)
	})

})
