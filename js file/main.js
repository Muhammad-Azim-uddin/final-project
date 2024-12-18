$(document).ready(function() {
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