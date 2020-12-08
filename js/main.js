"use strict";
$(".hamburger").click(function (e) {
	e.preventDefault();
	$(".ba-nav").toggleClass('is-active');
	$(this).toggleClass('is-active');
	$(".ba-header").toggleClass('is-active');
});
$('ul li a').click(function () {
	if ($('.ba-nav').hasClass('is-active')) {
		$('.ba-nav').removeClass('is-active');
		$('.hamburger').removeClass('is-active');
		$('.ba-header').removeClass('is-active');
	}
});


$('.ba-testemonials__slider').slick({
  slidesToScroll:1,
  infinite: false,
	mobileFirst: true,
	slide: ".ba-slide",
	variableWidth: true,
	appendArrows: '.ba-slider__nav',
	appendDots: '.ba-slider__nav',
	dotsClass: 'ba-slider__dot-nav',
	prevArrow: '.ba-slider__prev',
	nextArrow: '.ba-slider__next',
	responsive: [
		{
			breakpoint: 640,
			settings: {
			  slidesToScroll:2,
			  dots: true, 
			  arrows: true,
			}
		 },
		{
			breakpoint: 1024,
			settings: {
			  slidesToScroll:3,
			  dots: true, 
			  arrows: true,
			}
		 },
	 ]
 });


