$(document).ready(function() {
    $('.featuredProducts').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      
    $('.parent').click(function() {
        $('.sub-nav').toggleClass('visible');
    });
});

$(".allCat").click(function(){
    $(".ddown").toggleClass("active");
})

$(".ddLink").click(function(){
    $(".ddLink").toggleClass("active");
})

$(".dropdown-toggle").click(function(){
    $(".dropdown-menu").toggleClass("active");
})
var mixer = mixitup('.mixit');

// --digital clock.. 
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
}

setInterval(updateClock, 1000);
updateClock(); 