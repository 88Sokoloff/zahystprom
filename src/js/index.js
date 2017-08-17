// Fixed Menu on top
$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $('#nav_bar').addClass('fixed');
      $('#under_nav').addClass('margin_top');
    }
    if ($(window).scrollTop() < 21) {
      $('#nav_bar').removeClass('fixed');
      $('#under_nav').removeClass('margin_top');
    }
  });
});


// Scroll to top button
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 625) {
        $('#scroll_up').fadeIn();
    } else {
        $('#scroll_up').fadeOut();
    }
});
$(document).ready(function() {
    $("#scroll_up").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});