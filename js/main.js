/*
* Copyright www.la-ronda.com
*/

/* Change style of header with scroll */
var animatedHeader = (function(){

	var documentEl = $(document),
		navigation = $( '.navbar-default' ),
		scrolled = false,
		changeOnHeight = 300;

	function init() {
		documentEl.on( 'scroll', function() {
			if ( !scrolled ) {
				scrolled = true;
				setTimeout( changeHeader, 250 );
			}
		});
	}

	function changeHeader() {
		hY = scrollY();
		if ( hY >= changeOnHeight ) {
			navigation.addClass('navbar-shrink');
		}
		else {
			navigation.removeClass('navbar-shrink');
		}
		scrolled = false;
	}

	function scrollY() {
		return window.pageYOffset || documentEl.scrollTop();
	}

	init();

})();

$(function() {
	$('a.anchor-link').on('click', function(event) {
		event.preventDefault();
		var $anchor = $(this),
			scrollToY = $($anchor.attr('href')).offset().top;
		console.log('$anchor: ', $anchor);
		console.log('scrollToY: ', scrollToY);
		$('html, body').animate( {
			scrollTop: scrollToY
		}, 1500, 'easeInOutExpo' );
		console.log('animated');
	});

	$('.wk-dayname').css({
		'color': '#000'
	});
});