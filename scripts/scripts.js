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
