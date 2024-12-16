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
