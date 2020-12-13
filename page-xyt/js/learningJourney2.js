$(function () {
  $(".nav_wrapper").load("/SEEC/hejie/page-wjy/nav.html", function () {
    var sc = document.createElement("script");

    sc.src = "../js/nav.js";

    $("body").append(sc);
  });
  $(".footer-content").load("html/footer.html");

  const HEIGHT = 200;
  let $aL = $(".content-active-line");
  let $node = $(".node");
  let initH = $($node[0]).position().top;
  let arr = [];
  $node.each((index, item) => {
    arr.push($(item).position().top + Math.abs(initH));
  });
  $(window).on("scroll", scrollMove);

  scrollMove();
  function scrollMove() {
    let scrollY = $(document).scrollTop() - HEIGHT;
    if (scrollY >= arr[0]) {
      $aL.height(scrollY);
      if ($(window).width() > 767) {
        arr.forEach((item, index) => {
          if (scrollY > item) {
            $($node[index]).addClass("active");
          } else if (scrollY <= item) {
            $($node[index]).removeClass("active");
          }
        });
      }
    }
  }
});

$(function () {
  let $nodeNum = $(".node-num");
  $(window).on("resize", function () {
    if ($(window).width() > 767) {
      $nodeNum.removeClass("node");
    } else {
      $nodeNum.addClass("node");
    }
  });
});

$(function () {
  let $video = $("video");
  let $cV = $(".learn-content-video");
  $cV.on("mouseover", () => {
    $video.attr("controls", "controls");
  });
  $cV.on("mouseout", () => {
    $video.removeAttr("controls");
  });
  $cV.on("click", function () {
    $video.removeAttr("controls");
    let video = $(this).find("video")[0];
    console.log(video.paused);
    if (video.paused) {
      video.play();
      $(this).find("a").hide();
    } else {
      video.pause();
      $(this).find("a").show();
    }
  });
});
