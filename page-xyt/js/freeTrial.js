$(function () {
  $(".nav_wrapper").load("/SEEC/hejie/page-wjy/nav.html", function () {
    var sc = document.createElement("script");

    sc.src = "../js/nav.js";

    $("body").append(sc);
  });
  $(".footer-content").load("html/footer.html");

  $(".w-f-l-c").roundButton("现在就来测试吧", "b");

  $(".w-f-r-c").roundButton("联系我们");
});
