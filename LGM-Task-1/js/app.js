$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".carousel").carousel();
  $(".scrollspy").scrollSpy();
  $(".parallax").parallax();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});

$(".carousel.carousel-slider").carousel({
  fullWidth: true,
  indicators: true,
});
