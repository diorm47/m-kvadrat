$(function () {
  $({ numberValue: 0 }).animate(
    { numberValue: 24 },
    {
      duration: 800,
      easing: "linear",
      step: function (val) {
        $(".counter_1").html(Math.ceil(val));
      },
    }
  );
});
$(function () {
  $({ numberValue: 0 }).animate(
    { numberValue: 2 },
    {
      duration: 800,
      easing: "linear",
      step: function (val) {
        $(".counter_2").html(Math.ceil(val));
      },
    }
  );
});

$(function () {
  $({ numberValue: 0 }).animate(
    { numberValue: 10 },
    {
      duration: 800,
      easing: "linear",
      step: function (val) {
        $(".counter_3").html(Math.ceil(val));
      },
    }
  );
});

$(function () {
  $({ numberValue: 0 }).animate(
    { numberValue: 500 },
    {
      duration: 800,
      easing: "linear",
      step: function (val) {
        $(".counter_4").html(Math.ceil(val));
      },
    }
  );
});

// main page carousel
$(".our_services_carousel_car").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  mobileFirst: true
});
$(".our_services_carousel_mob").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  mobileFirst: true
});
$(".reviews_carousel").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  // autoplay: true,
  autoplaySpeed: 3000,

  prevArrow: $(".car_left_arrow"),
  nextArrow: $(".car_right_arrow"),
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
      },
    },
  ],
});

$(".comand_carousel").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  // autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  variableWidth: true,
  // centerPadding: "60px",
  slidesToShow: 3,

  prevArrow: $(".left_command_arr"),
  nextArrow: $(".right_command_arr"),
});

$(".costs_carousel").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,

  prevArrow: $(".car_cost_left"),
  nextArrow: $(".car_cost_right"),
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav_block").style.padding = "8px 0";
    // var elements = document.querySelectorAll(".nav_block p");
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].style.color = "white";
    // }

    document.querySelector(".nav_block").style.background =
      "rgb(0 153 161 / 94%)";
  } else {
    document.querySelector(".nav_block").style.padding = "25px 0";
    document.querySelector(".nav_block").style.background = "transparent";
    // var elements = document.querySelectorAll(".nav_black p");
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].style.color = "#2c3242";
    // }
  }
}


// Navigation active 
var navItems = document.querySelectorAll(".nav_links a");
for (var i = 0; i < navItems.length; i++) {
  if (navItems[i].href == window.location.href) {
    navItems[i].className = "active_nav_menu";
    console.log('window.location.href', window.location.href);
    console.log(navItems[i].href);
  }
}


// Mobile menu wrpper
function toggleMenu() {
  var element = document.querySelector(".nav_mob_menu");
  element.classList.toggle("mob_menu_wrapper");
}
