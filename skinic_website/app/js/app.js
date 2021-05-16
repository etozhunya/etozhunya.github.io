// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

  $(".close-icon").click(function (e) {
          $(".hamburger-icon").toggleClass("active");
          $(".header__menu").toggleClass("hidden");
          $(".login__menu").addClass("hidden");
          $(this).addClass('hide');
    });
	$(".hamburger-icon").click(function (e) {
	        $(".hamburger-icon").toggleClass("active");
	        $(".header__menu").toggleClass("hidden");
    });
  
  	$('.slider').slick({
  	  slidesToShow: 3,
  	  infinite: false,
      centerPadding: '40px',
  	  responsive: [
  	          {
  	              breakpoint: 767,
  	               settings: {
  	                      slidesToShow: 1,
  	                      slidesToScroll: 1
  	                  }
  	          }
  	      ]
  	}); 

    $('.headings li').click(function() {
          $(this).toggleClass('active');
          $(this).find('h4').toggleClass('active');
        if ($(this).hasClass('active')) {
          $(this).find('.animated').slideDown();
        } else  
            $(this).find('.animated').slideUp();
    });

  $('.faces li').click(function() {
    $('.triangle').removeClass('hidden')
    $(this).addClass('active').siblings().removeClass('active');
    $('.block').removeClass('in-view').eq($(this).index()).addClass('in-view');
    $('.slider').slick('setPosition');
  });

  $('.faces li').click(function() {
    var index = $(this).attr('data-index');

    $('.rectangle_gradient').css({
      "transform": "translate3d(" + index + "00%, 0, 0)"
    })
    $('.rectangle_gradient').css({
      "transition": ".5s"
    })
  })

  $('.scroll a').on('click', function(e) {
      e.preventDefault();
      // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 400, 'linear');
        var href = $(this).attr( 'href' );
        
        $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
        }, '300' );
  });



// auto changer input SMS verification JS
  const fields = document.querySelectorAll(".forSMS");
  const boxes = document.querySelectorAll(".forSMS-container");

  function handleInputField({ target }) {
    const value = target.value.slice(0, 1);
    target.value = value;

    const step = value ? 1 : -1;
    const fieldIndex = [...fields].findIndex((field) => field === target);
    const focusToIndex = fieldIndex + step;

    if (focusToIndex < 0 || focusToIndex >= fields.length) return;

    fields[focusToIndex].focus();
  }
  fields.forEach((field) => {
    field.addEventListener("input", handleInputField);
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

  $('#nameEdit').click(function() {
    $('.nameEdit').focus()
    $(this).addClass('hidden')
    $('.nameClose').addClass('visible')
    $('.nameEdit').prop('readonly', false);
    $('.nameButtons').addClass('visible')
  })
  $('.nameClose').click(function() {
    $('.nameClose').removeClass('hidden')
    $('.nameClose').removeClass('visible')
    $('#nameEdit').removeClass('hidden')
    $('#nameEdit').addClass('visible')
    $('.nameEdit').prop('readonly', true);
    $('.nameButtons').removeClass('visible')
  })


  $('#phoneEdit').click(function() {
    $('.phoneEdit').focus()
    $(this).addClass('hidden')
    $('.phoneClose').addClass('visible')
    $('.phoneEdit').prop('readonly', false);
    $('.phoneButtons').addClass('visible')
  })
  $('.phoneClose').click(function() {
    $('.phoneClose').removeClass('hidden')
    $('.phoneClose').removeClass('visible')
    $('#phoneEdit').removeClass('hidden')
    $('#phoneEdit').addClass('visible')
    $('.phoneEdit').prop('readonly', true);
    $('.phoneButtons').removeClass('visible')
  })

  $('#passwordEdit').click(function() {
    $('.passwordEdit').focus()
    $(this).addClass('hidden')
    $('.passwordClose').addClass('visible')
    $('.passwordEdit').prop('readonly', false);
    $('.passwordButtons').addClass('visible')
  })
  $('.passwordClose').click(function() {
    $('.passwordEdit').focus()
    $('.passwordClose').removeClass('hidden')
    $('.passwordClose').removeClass('visible')
    $('#passwordEdit').removeClass('hidden')
    $('#passwordEdit').addClass('visible')
    $('.passwordEdit').prop('readonly', true);
    $('.passwordButtons').removeClass('visible')
  })

  $('#dateEdit').click(function() {
    $('.dateEdit').focus()
    $(this).addClass('hidden')
    $('.dateClose').addClass('visible')
    $('.dateEdit').prop('readonly', false);
    $('.dateButtons').addClass('visible')
  })
  $('.dateClose').click(function() {
    $('.dateClose').removeClass('hidden')
    $('.dateClose').removeClass('visible')
    $('#dateEdit').removeClass('hidden')
    $('#dateEdit').addClass('visible')
    $('.dateEdit').prop('readonly', true);
    $('.dateButtons').removeClass('visible')
  })

  $('#addressEdit').click(function() {
    $('.addressEdit').focus()
    $(this).addClass('hidden')
    $('.addressClose').addClass('visible')
    $('.addressEdit').prop('readonly', false);
    $('.addressButtons').addClass('visible')
  })
  $('.addressClose').click(function() {
    $('.addressClose').removeClass('hidden')
    $('.addressClose').removeClass('visible')
    $('#addressEdit').removeClass('hidden')
    $('#addressEdit').addClass('visible')
    $('.addressEdit').prop('readonly', true);
    $('.addressButtons').removeClass('visible')
  })
// auto changer input SMS verification ENDS



  // // Select all »a« elements with a parent class »links« and add a function that is executed on click
  // $( '.scroll' ).on( 'click', function(e){
    
  //   // Define variable of the clicked »a« element (»this«) and get its href value.
  //   var href = $(this).attr( 'href' );
    
  //   // Run a scroll animation to the position of the element which has the same id like the href value.
  //   $( 'html, body' ).animate({
  //     scrollTop: $( href ).offset().top
  //   }, '300' );
    
  //   // Prevent the browser from showing the attribute name of the clicked link in the address bar
  //   e.preventDefault();

  // });







	// //ESC
	// $(document).on("keyup", function (e) { 
	//   if (e.keyCode === 27) { 
	//     $('.hamburger').removeClass('active');
	//     $('.headerMenu').addClass('hidden');
	//   }
	// });	

})
