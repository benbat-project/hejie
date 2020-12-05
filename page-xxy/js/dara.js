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
$(".footer-content").load("./footer.html");

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


window.onresize = function () {
    if (window.innerWidth > 768) {
        $(".core-wrapper ul").css({ transform: `translate(-20%)`, transition: 'none' })
    }
}
let count = 1;
$(".core-wrapper>i").click(function () {
    let index = +$(this).attr("data-index");
    count += index;
    $(".core-wrapper ul").one("transitionend", function () {
        if (count >= 4) {
            console.log(1111)
            count = 1;
            $(".core-wrapper ul").css({ transform: `translate(-${count * 240}px)`, transition: 'none' })
            console.log(count)
        } else if (count < 1) {
            count = 3
            $(".core-wrapper ul").css({ transform: `translate(-${count * 240}px)`, transition: 'none' })
        }
    })
    // console.log(count)
    $(".core-wrapper ul").css({ transform: `translate(-${count * 240}px)`, transition: '0.6s' })
})
