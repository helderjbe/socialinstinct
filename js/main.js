AOS.init({
  mirror: true
});

function collapseNav() {
  var toggle = $("header nav");
  toggle.toggleClass("responsive");
}

// Smooth Scroll on clicking nav items
$('nav a').on('click',function (e) {
  e.preventDefault();

  var $href = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $($href).offset().top
  }, 900, 'swing');
  return false;
});

// Parallaxing + add class active on scroll

$(document).scroll(function () {
  
  // parallaxing
  var $movebg = $(window).scrollTop() * -0.13;
  $('.parallax').css('background-positionY', ($movebg) + 'px');

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 200;
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }
  });
});

// Slideshow fading text
$("#testimonials > div:gt(0)").hide();

setInterval(function() {
  $('#testimonials > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#testimonials');
}, 3500);