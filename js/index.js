$(function(){
    $('footer').load('./page-wjy/footer.html')
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
$('.carousel').carousel({
    interval: 2000
})
$('.pro_item .pro_item_content .pro_item_tab .menu_tab ul li').click(function () {
	$('.pro_item .pro_item_content .pro_item_tab .menu_tab ul li').eq($(this).index()).addClass('active').siblings().removeClass('active')
	$('.pro_item_tab .menu_content .item').eq($(this).index()).addClass('showcontent').siblings().removeClass('showcontent')
})
  