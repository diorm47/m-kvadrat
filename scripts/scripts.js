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
$(".our_services_carousel").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});
$(".reviews_carousel").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,

  prevArrow: $(".car_left_arrow"),
  nextArrow: $(".car_right_arrow"),
});

$(".comand_carousel").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
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

// navigations

var reviews_block = document.querySelector(".reviews_block");
var scroll_to_reviews_block = document.querySelector(
  ".scroll_to_reviews_block"
);
function scrollToReviewsBlock() {
  reviews_block.scrollIntoView({ behavior: "smooth" });
}
scroll_to_reviews_block.addEventListener("click", scrollToReviewsBlock);

var partners_block = document.querySelector(".partners_block ");
var scroll_to_partners_block = document.querySelector(
  ".scroll_to_partners_block "
);

function scrollToPartnersBlock() {
  partners_block.scrollIntoView({ behavior: "smooth" });
}

scroll_to_partners_block.addEventListener("click", scrollToPartnersBlock);
