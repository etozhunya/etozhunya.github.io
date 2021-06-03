// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {


	// $('.specTable li').click(function() {
	//     $(this).toggleClass('active')
	//     $(this).next('.animated').slideToggle(500)
	//     $(this).siblings().removeClass('active')
	//     $(this).siblings().find('.animated').slideUp(500)
	//     $(this).siblings().find('h4').removeClass('active')

	//     var that = $(this)
	//     window.setTimeout(function() {
	//         $('html, body').animate({
	//             scrollTop: that.offset().top - 100
	//         });
	//     }, 600)
	// });


	// $('.slider').slick({
	//     slidesToShow: 1,
	//     slidesToScroll: 1,
	//     centerMode: true,
	//     centerPadding: '10px',
	//     infinite: true,
	//     responsive: [{
	//         breakpoint: 767,
	//         settings: {
	//             slidesToShow: 1,
	//             slidesToScroll: 1
	//         }
	//     }]
	// });
	  
		if ($('body').hasClass('haveSlider')) {
					  if ($(window).width() < 1025) {
				        $('.slider').slick({
				          centerMode: true,
				          centerPadding: '60px',
				          slidesToShow: 1,
				          responsive: [
				            {
				              breakpoint: 768,
				              settings: {
				                arrows: false,
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
				          breakpoint: 768,
				          settings: {
				          	dots: false,
				            arrows: false,
				            centerMode: true,
				            centerPadding: '0px',
				            slidesToShow: 1
				          }
				        }
				      ]
				    });
		}



	$('.specTable li').click(function() {
	    $(this).find('h4').toggleClass('active');
	    $(this).toggleClass('active');
	    $(this).siblings().find('.animated').slideUp()
	    $(this).siblings().removeClass('active')
	    if ($(this).hasClass('active')) {
	        $(this).find('.animated').slideDown();
	    } else
	        $(this).find('.animated').slideUp();
	    // var that = $(this)
     //    window.setTimeout(function() {
	    //     $('html, body').animate({
	    //         scrollTop: that.offset().top - 100
	    //     });
	    // }, 600)

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

})
