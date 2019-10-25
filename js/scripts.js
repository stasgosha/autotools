$(document).ready(function(){

	// Mobile nav
	if ($(window).width() < 576) {
		$('.dropdown-opener').bigSlide({
			side: 'right',
			easyClose: true,
			menuWidth: '260px'
		});
	} else{
		$('.dropdown-opener').click(function(){
			$(this).siblings('.hidden-nav').toggleClass('opened');
			$(this).toggleClass('active');
		});
	}

	// Panel Nav
	$('.panel-nav > li.menu-item-has-children > a').click(function(e){
		e.preventDefault();

		$(this).parent().siblings().find('.sub-menu').stop().slideUp(300);
		$(this).parent().siblings().find('a').removeClass('opened');
		$(this).toggleClass('opened').siblings('.sub-menu').stop().slideToggle(300)
	});

	// Search
	$('.search-block').click(function(){
		$('.find-parts-panel').toggleClass('opened');
	});

	// Sliders
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	$('.big-slider').slick({
		arrows: true,
		dots: false,
		autoplay: false,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		appendArrows: $('.big-slider-wrapper .slider-pagination'),
		fade: true
	});

	equalSlideHeight('.big-slider');



	$('.promo-slider').slick({
		arrows: true,
		dots: false,
		autoplay: false,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		appendArrows: $('.promo-slider-wrapper .slider-pagination')
	});

	equalSlideHeight('.big-slider');

	$('.language-select .item.current').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		$(this).closest('.language-select').toggleClass('opened');
	});

	// Tabs
	$("[data-tab]").click(function(e){
		e.preventDefault();
		var dest = $( $(this).data('tab') );
		dest.stop().fadeIn(300).siblings().hide(0);
		$(this).addClass('current').siblings().removeClass('current');
	});

	$("[data-tab]:first-child").trigger('click');
	$("[data-tab].preselected").trigger('click');

	// TODO: ↓↓↓ remove this script ↓↓↓
	// Current menu item highlithing
	$(function () {
		var location = window.location.href;
		var cur_url = location.split('/').pop();

		$('.top-nav li, .panel-nav li, .footer-nav li').each(function () {
			var link = $(this).find('a').attr('href');

			// console.log(link);

			if (cur_url == '') {
				cur_url = 'index.php';
			}

			if (cur_url == link)
			{
				$(this).addClass('current-menu-item');
				$(this).parents('li').addClass('current-menu-parent');
			}
		});
	});
});