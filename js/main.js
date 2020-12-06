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
 

