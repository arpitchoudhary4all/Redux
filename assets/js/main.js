

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
					$('body').css('position','fixed');	
				button.click(function(e) {

					t.toggleClass('hide');
					
					
					if ( t.hasClass('preview') ) {
						return true;
					} else {
						$('body').css('position','static');	
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
window.addEventListener("load",()=>{
	var headerToggle = $('header .toggle'),
    headerBackground = $('header .background'),
    headerMenu = $('header .background .menu'),
    headerTl = new TimelineMax({paused: false, reversed: true});

headerTl
  .to(headerBackground, 0.5, {top: 0, ease: Power2.easeInOut})
  .to(headerMenu, 0.3, {autoAlpha: 1, y: 0, ease: Power2.easeInOut}, '-=0.2');

headerToggle.on('click', function() {
  headerTl.reversed() ? headerTl.play() : headerTl.reverse();
});
  document.querySelector(".move").addEventListener("click",function(){
	headerTl.reversed() ? headerTl.play() : headerTl.reverse();
  });
  document.querySelector(".move1").addEventListener("click",function(){
	headerTl.reversed() ? headerTl.play() : headerTl.reverse();
  });
  document.querySelector(".move2").addEventListener("click",function(){
	headerTl.reversed() ? headerTl.play() : headerTl.reverse();
  });
  document.querySelector(".move3").addEventListener("click",function(){
	headerTl.reversed() ? headerTl.play() : headerTl.reverse();
  });
  document.querySelector(".move4").addEventListener("click",function(){
	headerTl.reversed() ? headerTl.play() : headerTl.reverse();
  });
  document.querySelector(".move5").addEventListener("click",function(){
	headerTl.reversed() ? headerTl.play() : headerTl.reverse();
  });
});
$(".main-nav").find("a").click(function(e) {
	e.preventDefault();
	var section = $(this).attr("href");
	$("html, body").animate({
			scrollTop: $(section).offset().top
	});
});
