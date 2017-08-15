$(document).ready(function(){
	
	$(window).scroll(function(){
 	var sticky = $('.header_bottom'),
    	  scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('fixed');
  	else sticky.removeClass('fixed');
	});


});