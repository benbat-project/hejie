$(function(){
    $('.nav_wrapper').load('./page-wjy/nav.html',function(){
       var sc =  document.createElement("script");
       sc.src= "./js/nav.js";
       $("body").append(sc);
    });
})
var defaultLang = "cn"
    function languageSelect(defaultLang){
        $("[i18n]").i18n({
            defaultLang: defaultLang,
            filePath: "./i18n/",
            filePrefix: "i18n_",
            fileSuffix: "",
            forever: true,
            callback: function(res) {}
        });
    }
    languageSelect(defaultLang);
  