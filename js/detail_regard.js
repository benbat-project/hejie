//顶部导航条
<<<<<<< .mine
$(function(){
=======
$(function () {
>>>>>>> .theirs
    $('.nav_wrapper').load('/SEEC/hejie/page-wjy/nav.html',function(){
    $('.nav_wrapper').load('./nav.html', function () {
        var sc = document.createElement("script");
       var sc =  document.createElement("script");
       sc.src= "../js/nav.js";
        sc.src = "../js/nav.js";
       $("body").append(sc);
        $("body").append(sc);
    });
})
$('.footer').load('./footer.html')
//圆形里面轮播图
let $inside = $('.centent_circle_inside');
$('.next').click(function () {
    $inside.css({ transform: 'translateX(-310px)', transition: '0.3s' });
})
$('.prev').click(function () {
    $inside.css({ transform: 'translateX(0)', transition: '0.3s' });
})
//中间部分轮播图
$('.main_footer_content').clickSlider([{
    url: 'https://wse.com.cn/_ui/addons/newsaddon/responsive/common/images/news/news-logo.jpg',
    title: '华尔街英语推出“携手前行”计划 赋能学员并助力后疫情时代新增长',
    time: '2020年11月26日',
    content: '',
    msg: '更多...'
}, {
    url: 'https://wse.com.cn/_ui/addons/newsaddon/responsive/common/images/news/news-logo.jpg',
    title: '英语学习兴趣不减 华尔街英语广州线上活动火热进行中',
    time: '2020年3月7日',
    content: '自全国疫情暴发至今，华尔街英语积极响应国家号召，暂停了全国线下实体中心的课程及活动，并采取系统消毒防护的相关措施，有效保障学员和员工的健康安全。',
    msg: '更多...'
}, {
    url: 'https://wse.com.cn/_ui/addons/newsaddon/responsive/common/images/news/news-logo.jpg',
    title: '职场英语“停课不停学” 华尔街英语与众携手共抗疫情',
    time: '2020年3月5日',
    content: '在全国上下共同战“疫”之下，新增确诊病例多日连降、治愈率接连上升，让全体中国人为之振奋。但疫情导致的各行各业停工或延期复工仍然影响深远',
    msg: '更多...'
}, {
    url: 'https://wse.com.cn/_ui/addons/newsaddon/responsive/common/images/news/news-logo.jpg',
    title: '华尔街英语保障学员权益 延长学员合同期',
    time: '2020年3月3日',
    content: '随着“战疫斗争”的推进，全国多个行业已经陆续复工，教培行业也在经历“关停线下”后鼓励发展各项线上服务工作。成人英语教育知名品牌华尔街英语在特殊时期多措并举，保障学员的实际权益的同时，满足学员英语学习的需求。',
    msg: '更多...'
}, {
    url: 'https://wse.com.cn/_ui/addons/newsaddon/responsive/common/images/news/news-logo.jpg',
    title: '华尔街英语 告学员书',
    time: '2020年3月3日',
    content: '亲爱的华尔街英语线下学员们，  大家好！  在过去的一个月里，我们很高兴地看到大家依然在课堂中热情活跃；我们的网络社区也热闹如常。',
    msg: '更多...'
}, {
    url: 'https://wse.com.cn/_ui/addons/newsaddon/responsive/common/images/news/news-logo.jpg',
    title: '非常时期特殊对待 华尔街英语与众携手共抗疫情',
    time: '2020年2月21日',
    content: '目前全国新冠病毒肺炎患者治愈人数逐渐增加，相关信息令人振奋，大众更加积极持续地响应国家号召，携手做好疫情战役胜利的坚实壁垒。非常时期不仅普通大众齐心协力，社会企业也',
    msg: '更多...'
}])

//底部轮播图
$(function () {
    let $slider = $(".slider");
    let $ls = $(".learning-slide");
    let count = 0;
    $(".slide-btn p").on('click', function () {
        let size = $slider.width() / $ls.width();
        let index = + $(this).data("index");
        count += index;
        console.log(count, size)
        if (count >= 0) {
            $(this).hide().siblings().show()
        } else if (count <= 0) {
            $(this).hide().siblings().show()
        } else {
            console.log("a")
            $(this).siblings().show()
        }
        $slider.css({ 'transform': `translateX(${-count * $ls.width()}px)` })
        $slider.css({ 'transition': '0.5s' })

    })
})