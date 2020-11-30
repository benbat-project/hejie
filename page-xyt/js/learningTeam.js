$(function () {
  $(".nav_wrapper").load("html/nav.html", function () {
    var sc = document.createElement("script");

    sc.src = "nav.js";
    console.log(sc);

    $("body").append(sc);
  });

  $(".l-t-s-l").click(function () {
    let size = -620;
    let tim = setInterval(function () {
      size += 10;
      if (size == 0) {
        clearInterval(tim);
      }
      $(".l-t-s-list").css({
        transform: `translate(${size}px,0)`,
      });
    }, 1);
    $(".l-t-s-l").css({
      visibility: "hidden",
    });
    $(".l-t-s-r").css({
      visibility: "visible",
    });
  });
  $(".l-t-s-r").click(function () {
    let size = 0;
    let tim = setInterval(function () {
      size += 10;
      if (size == 310) {
        clearInterval(tim);
      }
      $(".l-t-s-list").css({
        transform: `translate(-${size * 2}px,0)`,
      });
    }, 1);
    $(".l-t-s-r").css({
      visibility: "hidden",
    });
    $(".l-t-s-l").css({
      visibility: "visible",
    });
  });
});
