// ...............................feature section slick slider starts here ................................
$(document).ready(function() {
    // $('.featuredProducts').slick({
      $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        // slidesToShow: 4,
        // slidesToScroll: 3,
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
          ]
      });

      // ...............................feature section slick slider end ................................
      
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

// --...........................digital clock..............................
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
//................................ clock end here..............................

//................................ subscribe popup ..............................
  let subscribe = document.querySelector("#subscribe");
  subscribe.addEventListener("click" , function(){
      if (subscribe.style.backgroundColor === "green") {
            subscribe.style.backgroundColor = "red";
            alert("Unsubscribed")
  } else {
  subscribe.style.backgroundColor = "green";
  alert("Subscribed")
}
})
// .................................subscribe popup end here..............................

//................................. header sticky section below..............................
  let scrollPosition = document.documentElement.scrollTop;
  let headerHeight = document.querySelector("#header-bottom").offsetHeight;
  window.addEventListener('scroll', function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > headerHeight+600) {
      document.querySelector("#header-bottom").classList.add("sticky");
      } else {
        document.querySelector("#header-bottom").classList.remove("sticky");
    }
  })

  //............................... header sticky section end here..............................
  
// ..................................back to top bar starts here ................................
  let backToTop = document.querySelector("#backToTop");
  window.addEventListener("scroll", function(){
    let scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition > 500) {
      backToTop.style.display = "block";
      backToTop.style.right = "20px";
    }
    else {
      backToTop.style.display = "none";
    }
  });
  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
// ..................................back to top bar ends here ................................
  

// ..................................loader starts here ................................
let loader = document.querySelector(".loader");
  let onload = document.querySelector("#onload");
  
  window.addEventListener("load", function() {
    loader.style.display = "none";
    onload.style.display = "none";

});

// ..................................loader ends here ................................

//................................... pop up video ................................... 
$(".close-btn").click(function () {
  $(".popup").addClass("d-none");
});
// *...................................  popup close..................................

$(window).on("load", function () {
  setTimeout(function () {
    $(".popup").removeClass("d-none");
    $(".popup").addClass("d-block");
  }, 2000);
});


new VenoBox({
  selector: '.videoHome',
});

// ......................................slick banner starts here ................................ 

$(document).ready(function(){
  $('.slick-banner').slick({
    dots: true,         
    infinite: true,     
    speed: 300,         
    slidesToShow: 1,    
    slidesToScroll: 1,  
    autoplay: true,     
    autoplaySpeed: 2000,
    arrows: true,       
    fade: false,      
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>'     
  });
});
  // ...............................slick banner end ................................

  // .......................................wow js starts here ..................
 
  // let wow = new wow({
      // boxClass:     'wow', 
      // animateClass: 'animate__bounceInUp',
      // offset:       0,   
      // mobile:       true,
      // live:         true,
      // callback:     function(box) {
      // },
      // scrollContainer: null,    
      // resetAnimation: true,
    // });
  // wow.init();
//  });

// .......................................wow js ends here ..................


		