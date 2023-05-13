// Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function() {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});
//Click event to scroll to top
$('.scrollToTop').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});


// Slick slider js
$(".vertical").slick({
    dots: false,
    vertical: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
});


// Owl carousel js
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})