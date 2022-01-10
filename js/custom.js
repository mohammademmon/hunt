$(function () {

    // hero section js start
    $('.hero_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: ".hero_slide_arrows_next",
        prevArrow: ".hero_slide_arrows_pre",
    });
    // hero section js end


    // service content section js start
    $('.service_content_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: ".service_content_arrow_down",
        prevArrow: ".service_content_arrow_up",
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ]
    });
    // service content section js end


    // feedback section js start
    $('.feedback_slide_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.feedback_slide_img'
    });
    $('.feedback_slide_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback_slide_content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: ".feedback_arrows_down",
        prevArrow: ".feedback_arrows_up",
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ]
    });
    // feedback section js end

    // client counter js start

    jQuery(document).ready(function ($) {
        $('.client_count').counterUp({
            delay: 10,
            time: 1500,
        });
    });

    // client counter js end


    // brand section js start
    $('.brand_main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        }, ]
    });
    // brand section js end


});