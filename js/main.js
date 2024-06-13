(function ($) {
	("use strict");

	// Навигация
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$(".navbar").addClass("sticky-top");
		} else {
			$(".navbar").removeClass("sticky-top");
		}
	});

	// Поплавок
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".back-to-top").fadeIn("slow");
		} else {
			$(".back-to-top").fadeOut("slow");
		}
	});
	$(".back-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
		return false;
	});

	// «Товары» карусель
	$(".product-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1000,
		margin: 45,
		dots: false,
		loop: true,
		nav: true,
		navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});

	// «Команда» карусель
	$(".team-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1000,
		margin: 45,
		dots: false,
		loop: true,
		nav: true,
		navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});

	// «Отзывы» карусель
	$(".testimonial-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1000,
		items: 1,
		dots: false,
		loop: true,
		nav: true,
		navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
	});
})(jQuery);
