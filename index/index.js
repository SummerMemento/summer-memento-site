$(document).ready(function() {
  $('.nav-link').click(function(e) {
    e.preventDefault();
    
    href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top - 50
    }, 500);
  });
});