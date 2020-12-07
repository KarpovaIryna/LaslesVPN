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
$('.ba-pricing__wrapper').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	slide: '.ba-plan',
	arrows: false,
	adaptiveHeight: false,
	mobileFirst: true,
	responsive: [
		{
		breakpoint: 640,
      settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}},
		{
			breakpoint: 1080,
		  settings: 'unslick'
		}

	]
 });
 

