/*
	Radius by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			$header.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');

				button.click(function(e) {

					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});

			});

			$.fn.jQuerySimpleCounter = function( options ) {
				var settings = $.extend({
					start:  0,
					end:    100,
					easing: 'swing',
					duration: 400,
					complete: ''
				}, options );
		
				var thisElement = $(this);
		
				$({count: settings.start}).animate({count: settings.end}, {
					duration: settings.duration,
					easing: settings.easing,
					step: function() {
						var mathCount = Math.ceil(this.count);
						thisElement.text(mathCount);
					},
					complete: settings.complete
				});
			};
		
		
		$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
		$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
		$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
		$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});
		
		
		
			  /* AUTHOR LINK */
			 $('.about-me-img').hover(function(){
					$('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
				}, function(){
					$('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
				});
		  
		// Footer.
			$footer.each( function() {

				var t 		= jQuery(this),
					inner 	= t.find('.inner'),
					button 	= t.find('.info');

				button.click(function(e) {
					t.toggleClass('show');
					e.preventDefault();
				});

			});

	});

})(jQuery);