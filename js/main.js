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
	dots: false,
	infinite: false,
// 	speed: 300,
// 	arrows: true,
	slidesToShow: 6,
  slidesToScroll:1,
	variableWidth: true,
	mobileFirst: true,
	slide: '.ba-slide',
	// swipeToSlide: true,
	// swipe: true,
	// responsive: [
	// 	{
	// 	  breakpoint: 640,
	// 	  settings: {
	// 		 slidesToShow: 2,
	// 		 slidesToScroll:1,
	// 		 infinite: true,
	// 		 dots: true
	// 	  }
	// 	},
	// 	{
	// 	  breakpoint: 1024,
	// 	  settings: {
	// 		 slidesToShow: 1,
	// 		 slidesToScroll: 1
	// 	  }
	// 	},
	//  ]
 });
 

