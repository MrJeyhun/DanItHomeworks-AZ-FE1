//scroll up event
$(document).ready(function() {
  //show hide button and scroll when it is clicked
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $(".scrollTop").fadeIn();
    } else {
      $(".scrollTop").fadeOut();
    }
  });

  //smooth scrolling to up
  $(".scrollTop").click(function(btn) {
    btn.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500, "swing");
  });

  //scroll to anchor
  $('a[href^="#"]').on("click", function(event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 100
          },
          1600,
          "swing"
        );
    }

    //end of scroll code
  });

  $(".slide-btn").on("click", function() {
    $(".rated").slideToggle(650);
  });
});
