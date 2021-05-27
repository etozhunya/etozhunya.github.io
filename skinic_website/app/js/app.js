document.addEventListener('DOMContentLoaded', () => {


    if ($('body').hasClass('hash')) {
        $(window.location.hash).addClass('in-view').siblings().removeClass('in-view')
        $('.scroll').eq($(".block.in-view").index()).addClass('active');
        $('.rectangle_gradient').css({
            "transform": "translate3d(" + $(".block.in-view").index() + "00%, 0, 0)"
        })
        $('.rectangle_gradient').css({
            "transition": ".5s"
        })
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
    $(".timePicker").on("input", function() {
       $('#detailsBlock').find('.animated').slideToggle()
       $('#detailsBlock').find('h4').addClass('active')
       $('html, body').animate({
           scrollTop: $('#detailsBlock').offset().top
       }, '300');


    });
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


    if ($(window).width() < 1025) {
        $('.pricing .headings .animated ul li .toBook').click(function() {
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


    // $('.pricingSection').click(function() {
    //     if ($(window).width() < 1024) {
    //         $(this).href('bookTreatment.html')
    //     }
    // })




    $('.headings li h4').click(function() {
        $(this).parent().toggleClass('active')
        $(this).toggleClass('active');
        $(this).next('.animated').slideToggle(500)
        $(this).parent().siblings().removeClass('active')
        $(this).parent().siblings().find('.animated').slideUp(500)
        $(this).parent().siblings().find('h4').removeClass('active')

        var that = $(this)
        window.setTimeout(function() {
            $('html, body').animate({
                scrollTop: that.offset().top - 100
            });
        }, 600)
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
        $( "#confirmationBlock" ).addClass('active')
        $( "#confirmationBlock" ).find('.animated').slideToggle()
        $( "#confirmationBlock" ).find('h4').toggleClass('active')



        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300');

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


})