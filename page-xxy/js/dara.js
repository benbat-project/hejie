
$('.nav_wrapper').load('./nav.html', function () {
    var sc = document.createElement("script");
    sc.src = "./js/nav.js";
    $("body").append(sc);
})

$('.video').on('mouseover', () => {
    $('video')[0].controls = true;
})
$('.video').on('mouseout', () => {
    $('video')[0].controls = false;
})




var defaultLang = "cn"
function languageSelect(defaultLang) {
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        filePath: "./i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function (res) { }
    });
}
languageSelect(defaultLang);