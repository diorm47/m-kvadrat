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
  autoplaySpeed: 50000,
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
  autoplaySpeed: 50000,

  prevArrow: $(".car_cost_left"),
  nextArrow: $(".car_cost_right"),
});
