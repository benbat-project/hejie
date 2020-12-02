!(function ($) {
  $.fn.extend({
    /* 
    title:文字
    color： "b" 蓝色 ，不传参默认 红色
    */
    roundButton: function (title, color = "r") {
      let icon = color == "b" ? "fa-angle-right" : "fa-commenting-o";
      let url =
        color == "b"
          ? "https://wse.com.cn/zh/programs/vvip/"
          : "https://livechat.wsi.com.cn/live800/chatClient/chatbox.jsp?companyID=8914&configID=36&enterurl=https://wse.com.cn/vvipPLPChat";
      $(this).append(` 
        <a href=${url} target="_blank">
          <div class='round-button ${color}'>
            <i class="fa ${icon} fa-5x"></i>
            <p>${title}</p>
          </div>
        </a>`);
    },

    /*
      data:{url,title,msg}
        url:图片路径
        title：标题
        msg：信息文字
    */
    clickSlider: function (data) {
      let li = ``;
      let oneClickWidth = 0;
      let transformX = 0;

      $(data).each((index, item) => {
        console.log(item);

        li += ` <li>
              <img
                src=${item.url}
              />
              <h6>${item.title}</h6>
              <p>
              ${item.msg}
              </p>
            </li>`;
      });

      let htmls = ` <div class="click-slider">
                      <div class="click-slider-left-button ">
                        <i class="fa fa-angle-left fa-5x"></i>
                      </div>
                      <div class="click-slider-content">
                        <ul class="click-slider-list">
                          ${li}
                        </ul>
                      </div>
                      <div class="click-slider-right-button cl-sl-b">
                        <i class="fa fa-angle-right fa-5x"></i>
                      </div>
                    </div>`;

      $(this).append(htmls);

      setClickWidth = () => {
        if ($(window).width() > 767) {
          oneClickWidth = $(".click-slider-list li").outerWidth(true) * 2;
        } else {
          oneClickWidth = $(".click-slider-list li").outerWidth(true);
        }
      };
      checkButton = (add, rem) => {
        $(add).addClass("cl-sl-b");
        $(rem).removeClass("cl-sl-b");
      };

      setSlider = () => {
        $(window).on("resize", function () {
          setClickWidth();
        });
        setClickWidth();

        $(".click-slider-left-button").click(function () {
          transformX = transformX + oneClickWidth;
          if (transformX >= 0) {
            checkButton(
              ".click-slider-right-button",
              ".click-slider-left-button"
            );
          }
          $(".click-slider-list").animate({}, function () {
            $(".click-slider-list").css({
              transform: `translate(${transformX}px,0)`,
            });
          });
        });

        $(".click-slider-right-button").click(function () {
          transformX = transformX - oneClickWidth;
          if (transformX <= -1240) {
            transformX = -1240;
            checkButton(
              ".click-slider-left-button",
              ".click-slider-right-button"
            );
          }
          if (transformX <= -620 && oneClickWidth == 620) {
            transformX = -620;
            checkButton(
              ".click-slider-left-button",
              ".click-slider-right-button"
            );
          }

          $(".click-slider-list").animate({}, function () {
            $(".click-slider-list").css({
              transform: `translate(${transformX}px,0)`,
            });
          });
        });
      };
      setSlider();
    },
  });
})(jQuery);
