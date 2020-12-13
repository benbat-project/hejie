$(function () {
  $(".tab-c-button").roundButton("了解更多", "b");
  $(".tab-c-button").roundButton("立即咨询");
  $(".footer-content").load("html/footer.html");

  $(".tab-bar li").click(function () {
    $(".tab-bar li").each(function (i, d) {
      $(d).children("a").css({
        color: "#043458",
      });
      $(d).removeClass("active");
      $(".tab-content>li").eq(i).fadeOut(400);
    });
    $(this).addClass("active");
    $(this).children("a").css({
      color: "#ee2d42",
    });
    let index = $(this).index();
    console.log(index, $(".tab-content>li"));

    $(".tab-content>li").eq(index).fadeIn(400);
  });
  //   -------------------------------
  $(".button-r").roundButton("咨询我们");

  $(".nav_wrapper").load("/SEEC/hejie/page-wjy/nav.html", function () {
    var sc = document.createElement("script");

    sc.src = "../js/nav.js";

    $("body").append(sc);
  });
});

$(".carousel").carousel({
  interval: 2000,
});
