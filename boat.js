//  Set the date we're counting down to
  var countDownDate = new Date("dec 30, 2023 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = hours + "Hours : "
        + minutes + "mins : " + seconds + "sec ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "₹  " + slide1 + " - ₹ " + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }

$(document).ready(function () {
    $('#my-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 1000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('#pills-tab').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 1000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

// -----------------gift with boat page ---------------------------- //

$(document).ready(function () {
    $('#pills-tab-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 1000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('#pills-tab-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 1000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('#corporate-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// corporate page form model 
