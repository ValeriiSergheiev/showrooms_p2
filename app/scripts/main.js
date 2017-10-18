$(document).ready(function() {
	
	//Mob menu
	$('.mob-menu-btn').click(function(event) {
		event.preventDefault();
		$('.menu').slideToggle('fast');
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.menu').show();
		} else {
			$('.menu').hide();
		}
	});

	//Slider
	$('.home-page-slider').slick({
		infinite: true,
		autoplay: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
	});

	$('.featured-stores-slider').slick({
		infinite: true,
		autoplay: true,
		speed: 900,
		autoplaySpeed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: false
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false
			}
		}
		]
	});

	//Collapse content
	$('.text-block article').readmore({
		speed: 75,
		collapsedHeight: 50,
		moreLink: '<a href="#" class="btn-common">Подробнее</a>',
		lessLink: '<a href="#" class="btn-common">Скрыть</a>'
	});

	$('.block-title-stores-list').readmore({
		speed: 75,
		collapsedHeight: 80,
		moreLink: '<a href="#" class="btn-common">Все магазины</a>',
		lessLink: '<a href="#" class="btn-common">Скрыть</a>'
	});

	$('.sidebar-text p').readmore({
		speed: 75,
		collapsedHeight: 125,
		moreLink: '<a href="#" class="btn-common">Подробнее</a>',
		lessLink: '<a href="#" class="btn-common">Скрыть</a>'
	});

	$('.coupon-list-text').readmore({
		speed: 75,
		collapsedHeight: 0,
		moreLink: '<a href="#" class="btn-common">Подробнее</a>',
		lessLink: '<a href="#" class="btn-common">Скрыть</a>'
	});

	//Tab active
	$('.tabs-panel li').click(function() {
		$(this).addClass('btn-active-grey').siblings().removeClass('btn-active-grey');
	});

	//Menu active
	$('.sidebar-list li').click(function() {
		$(this).addClass('menu-active').siblings().removeClass('menu-active');
	});

	//View mode active
	$('.view-mode li').click(function() {
		$(this).addClass('view-mode-active').siblings().removeClass('view-mode-active');
	});

	//Popups
	$('.open-popup-link').magnificPopup({
		type:'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

});