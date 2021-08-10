// Initialize wow.js
new WOW().init();

!function ($) {
    "use strict";

    // Loader 
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });

    // Menu
    $('.navbar-toggle').on('click', function (event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });

    $('.navigation-menu a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });

    //Scrollspy
    $("#navigation").scrollspy({
        offset: 50
    });

    //Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    $('.mouse-down').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 72
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Calculating Overflow Container width
    let leftContainerWidth = $(window).width() - (($(window).width() - $('.overflow-container-section .container').outerWidth()) / 2);
    $('.overflow-container-section .content').width(leftContainerWidth + 'px');

    $(window).resize(function () {
        let leftContainerWidth = $(window).width() - (($(window).width() - $('.overflow-container-section .container').outerWidth()) / 2);
        $('.overflow-container-section .content').width(leftContainerWidth + 'px');
    });

    // Projects Slider
    let projectSlider = $('.project-slider');
    projectSlider.owlCarousel({
        items: 3,
        margin: 20,
        autoWidth: true,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
        merge: true,
        URLhashListener: true,
        startPosition: 'URLHash',
    });

    // Projects Slider Custom Navigation Events
    $('.next-icon').on('click', function() {
        projectSlider.trigger('next.owl.carousel');
        return false;
    });
    $('.prev-icon').on('click', function() {
        projectSlider.trigger('prev.owl.carousel');
        return false;
    });

    // Testimonial Slider
    let feedbackSlider = $('.feedback-slider');
    feedbackSlider.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        navText: ['<i class="icofont-rounded-left"></i>','<i class="icofont-rounded-right"></i>'],
        responsive: {
            767: {
                nav: true,
                dots: false
            }
        }
    });

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 3000);
        return false;
    });
}(jQuery)