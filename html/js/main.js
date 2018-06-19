(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    // Murad Landing
    var datacountdown = $('#time-countdown').attr('data-countdown');
    $('#time-countdown').countdown(datacountdown, function (event) {
        $(this).html(event.strftime('<div class="number">%d<span>Ngày<span></div>:<div class="number">%H<span>Giờ<span></div>:<div class="number">%M<span>Phút<span></div>:<div class="number">%S<span>Giây<span></div>'));
    });

    // WOW JS INIT
    new WOW({
        offset: 0
    }).init();

    // SCROLL TO FIXED
    $('header').scrollToFixed({
        zIndex: 1000
    });

    // DATE PICKER
    $('.datepicker').datepicker();

    // TOOLTIP INIT
    $('[data-toggle="tooltip"]').tooltip();

    // SCROLL FUNCTION
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $('.up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    // JQUERY COUNTER
    $(".counter").countimator({
        duration: 1000
    });

    // BREADCRUMB PAGE NAME
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // RESPONSIVE TAB INIT
    $('.responsive-tab').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // MENU
    $('.btn-showmenu').click(function () {
        $('.menu').addClass('open');
    });
    $('.btn-closemenu').click(function () {
        $('.menu').removeClass('open');
    });
    // END-MENU

    // SHOW HIDDEN CONTENT
    $('.btn-showdetail').click(function () {
        $(this).css('display', 'none');
        $('.product-content').addClass('open');
        $('.btn-hidedetail').css('display', 'block');
    });
    $('.btn-hidedetail').click(function () {
        $(this).css('display', 'none');
        $('.product-content').removeClass('open');
        $('.btn-showdetail').css('display', 'block');
    });

    // CAREER
    $('.btn-apply').click(function () {
        $('.apply-frm').slideToggle(300);
    });

    // CAREER
    $('.job .job-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.job-content').slideUp(500);
        } else {
            $('.job').removeClass('active');
            $('.job').find('.job-content').slideUp(500);
            $(this).parent().addClass('active');
            $(this).parent().find('.job-content').slideDown(500);
        }
    });

    // FAQ
    $('.faq .faq-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.faq-content').slideUp(300);
        } else {
            $('.faq').removeClass('active');
            $('.faq').find('.faq-content').slideUp(300);
            $(this).parent().addClass('active');
            $(this).parent().find('.faq-content').slideDown(300);
        }
    });

    // HOME BANNER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        dots: false,
        fade: false,
        infinite: false
    });

    // PAGE BANNER
    $('.page-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        fade: true,
        infinite: true
    });

    // HOME FEEDBACK
    $('.feedback-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        fade: false,
        asNavFor: '.feedback-slide'
    });
    $('.feedback-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0px',
        infinite: true,
        asNavFor: '.feedback-slide',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
    });
    $('.feedback-author').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.feedback-slide'
    });

    // PARTNER SLICK
    $('.partner-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true,
        infinite: true
    });

    // INPUT NUMBER
    $('.btn-spin').click(function () {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });

    // PARALLAX
    $('.parallax').parallax();
});

},{}]},{},[1])

//# sourceMappingURL=main.js.map
