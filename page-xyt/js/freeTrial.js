$(function () {
  $(".nav_wrapper").load("html/nav.html", function () {
    var sc = document.createElement("script");

    sc.src = "nav.js";
    console.log(sc);

    $("body").append(sc);
  });
  $(".footer-content").load("html/footer.html");
});
