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

// BURGER MENU ICON
$(document).ready(function(){
  $('#burger').click(function(){
    $(this).toggleClass('open');
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


// SECTION SERTIFICATE
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}