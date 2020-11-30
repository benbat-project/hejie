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
  });
})(jQuery);
