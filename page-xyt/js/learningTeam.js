$(function () {
  $(".nav_wrapper").load("html/nav.html", function () {
    var sc = document.createElement("script");

    sc.src = "./js/nav.js";
    console.log(sc);

    $("body").append(sc);
  });
  $(".footer-content").load("html/footer.html");

  $(".l-t-con").clickSlider([
    {
      url:
        "https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_FT.png",
      title: "外教师资",
      msg:
        " 我们的外教老师都来自英语母语国家，经验丰富，拥有专业教学资质，帮助你学习地道英语。",
    },
    {
      url:
        "https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_SA.png",
      title: "学习顾问",
      msg:
        "我们的学习顾问在指导你使用华尔街英语学习方法之外，还将全程负责你的课程管理，引导你实现自己的学习目标。",
    },
    {
      url:
        "https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_CC.png",
      title: "课程顾问",
      msg:
        "  我们的外教老师都来自英语母语国家，经验丰富，拥有专业教学资质，帮助你学习地道英语。",
    },
    {
      url:
        "https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_SM.png",
      title: "服务经理",
      msg: "服务经理为你和老师们提供支持，并帮助安排教学日程。",
    },
    {
      url:
        "https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T10/YourLearningPartners/Desktop/T10_02_CSA.png",
      title: "客服助理",
      msg:
        " 客服助理会在你到来的时候接待你，并协助你预订课程，为你做好各方面的学习准备。",
    },
  ]);
});
