document.addEventListener('DOMContentLoaded', () => {


    if ($('body').hasClass('hash')) {
        $(window.location.hash).addClass('in-view').siblings().removeClass('in-view')
    }


    if ($('body').hasClass('haveGallery')) {
        $('.image-link').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    }
    // $('.qs-datepicker-container').click(function(){
    //     console.log('asdad')
    // })
    $(document).on("click",".qs-square", function(){
        $('.timePicker').removeClass('disabled')
       $('.timeSelect').select2('open');
    });
    if ($('.timePicker').hasClass('open')) {
        console.log('11111111')
    }
    if ($('body').hasClass('haveSelect')) {
            $('.select').select2();
    }

    $(".close-icon").click(function(e) {
        $(".hamburger-icon").toggleClass("active");
        $(".header__menu").toggleClass("hidden");
        $(".login__menu").addClass("hidden");
        $(this).addClass('hide');
    });

    if ($("body").hasClass("media")) {
        $(document).scroll(function() {
            console.log(Math.ceil($(this).scrollTop()/100)*10)
            // console.log(Math.ceil(Math.round($('video').offset().top)/100)*10)
            if (Math.ceil($(this).scrollTop()/100)*10 == Math.ceil(Math.round($('video').offset().top - 300)/100)*10) {
                console.log('PLAY!!!!!')
                $('video').trigger('play')
            }
        });
    }


    if ($(window).width() < 1024) {
        $('.pricing .headings .animated ul li ').click(function() {
            window.location.href = 'bookTreatment.html';
        })
    }



    $(".hamburger-icon").click(function(e) {
        $(".hamburger-icon").toggleClass("active");
        $(".header__menu").toggleClass("hidden");
    });

    $('.slider').slick({
        slidesToShow: 3,
        infinite: false,
        centerPadding: '40px',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    if ($(window).width() < 767) {

        $('.sliderTreatments').slick({
           infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // slickCurrentSlide
            // afterChange
        });
        $('.sliderTreatments').on('afterChange', function(event, slick, currentSlide){
          $('.block').removeClass('in-view').eq(currentSlide).addClass('in-view');
        });
    }


    $('.headings li h4').click(function() {
        $(this).parent().toggleClass('active')
        $(this).toggleClass('active');
        $(this).next('.animated').slideToggle()
        $(this).parent().siblings().removeClass('active')
        $(this).parent().siblings().find('.animated').slideUp()
        $(this).parent().siblings().find('h4').removeClass('active')
    });
    $('.specTable li').click(function() {
        $(this).find('h4').toggleClass('active');
        $(this).toggleClass('active');
        $(this).siblings().find('.animated').slideUp()
        $(this).siblings().find('h4').removeClass('active')
        if ($(this).hasClass('active')) {
            $(this).find('.animated').slideDown();
        } else
            $(this).find('.animated').slideUp();

    });

    if ($(window).width() > 768) {
        $('.faces li').click(function() {
            $('.triangle').removeClass('hidden')
            $(this).addClass('active').siblings().removeClass('active');
            $('.block').removeClass('in-view').eq($(this).index()).addClass('in-view');
            $('.slider').slick('setPosition');
        });
    }

    
    // if ($('.middleBlock').parent().parent().hasClass('slick-active')) {
    //     console.log('varenuy')
    // }
    // if ($('.middleBlock').parent().parent().hasClass('slick-current')) {
    //     console.log('TOP')
    // }
    // $('.slick-slide div .scroll').click(function() {
    //     $('.block').removeClass('in-view').eq($(this).index()).addClass('in-view');
    // });


    $('.faqLinks li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.faqWrapper').removeClass('visible').eq($(this).index()).addClass('visible');
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
        var href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300');
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
    $('.deletePopup').click(function() {
        $('#deletePopup').addClass('active')
        $('body').addClass('scrollDisabled')
    });
    $('.confirmPopup').click(function() {
        $('#confirmPopup').addClass('active')
        $('body').addClass('scrollDisabled')
    });
    $('.popupClose').click(function() {
        $('#deletePopup').removeClass('active')
        $('#confirmPopup').removeClass('active')
        $('body').removeClass('scrollDisabled')
    });
    $('.fade__container').click(function() {
        $('.popup').removeClass('active')
        $('body').removeClass('scrollDisabled')
    });

    $('.step1 button').click(function() {
        $('.step1').removeClass('visible')
        $('.step2').addClass('visible')
    })
    $('.step2 button').click(function() {
        $('.step2').removeClass('visible')
        $('.step3').addClass('visible')
    })

    $('.confirmButton').click(function(e) {
        $( "#confirmationBlock" ).find('.animated').slideToggle()
        $( "#confirmationBlock" ).find('h4').toggleClass('active')



        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300');

    })




    $('#nameEdit').click(function() {
        // $('.nameEdit').focus()
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
        // $('.phoneEdit').focus()
        $(this).addClass('hidden')
        $('.phoneClose').addClass('visible')
        $('.confirmationLink').addClass('visible')
        $('.phoneEdit').prop('readonly', false);
        $('.phoneButtons').addClass('visible')
    })
    $('.phoneClose').click(function() {
        $('.confirmationLink').removeClass('visible')
        $('.phoneClose').removeClass('hidden')
        $('.phoneClose').removeClass('visible')
        $('#phoneEdit').removeClass('hidden')
        $('#phoneEdit').addClass('visible')
        $('.phoneEdit').prop('readonly', true);
        $('.phoneButtons').removeClass('visible')
    })

    $('#passwordEdit').click(function() {
        // $('.passwordEdit').focus()
        $(this).addClass('hidden')
        $('.passwordClose').addClass('visible')
        $('.passwordEdit').prop('readonly', false);
        $('.passwordButtons').addClass('visible')
    })
    $('.passwordClose').click(function() {
        // $('.passwordEdit').focus()
        $('.passwordClose').removeClass('hidden')
        $('.passwordClose').removeClass('visible')
        $('#passwordEdit').removeClass('hidden')
        $('#passwordEdit').addClass('visible')
        $('.passwordEdit').prop('readonly', true);
        $('.passwordButtons').removeClass('visible')
    })

    $('#dateEdit').click(function() {
        // $('.dateEdit').focus()
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
        // $('.addressEdit').focus()
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
    $('#methodEdit').click(function() {
        // $('.methodEdit').focus()
        $(this).addClass('hidden')
        $('.methodClose').addClass('visible')
        $('.methodEdit').removeAttr('disabled')
        $('.methodButtons').addClass('visible')
    })
    $('.methodClose').click(function() {
        $('.methodClose').removeClass('hidden')
        $('.methodClose').removeClass('visible')
        $('#methodEdit').removeClass('hidden')
        $('#methodEdit').addClass('visible')
        $('.methodEdit').attr('disabled', true);
        $('.methodButtons').removeClass('visible')
    })






    // auto changer input SMS verification JS
    const fields = document.querySelectorAll(".forSMS");
    const boxes = document.querySelectorAll(".forSMS-container");

    function handleInputField({
        target
    }) {
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
    // auto changer input SMS verification ENDS


    // DATEPICKER
    var pickers = document.querySelectorAll('.datePicker');
    pickers.forEach(function(el) {

        datepicker(el)
    })
    
        // document.activeElement.blur();
        // $(".datePicker").blur();


        
        // $('.datePicker').onfocus

})
// jQuery(document).ready(function($){




// if ($(window).width() < 768) {
//     var deviceAgent = navigator.userAgent.toLowerCase();

//     var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);

//         if (agentID) {

     

//         $('body').addClass('ios');

//             $('.select').next().find('.select2-results').css("display", "none");



//         }
// }

// });