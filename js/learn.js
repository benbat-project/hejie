//顶部导航条
<<<<<<< .mine
$(function(){
=======
$(function () {
>>>>>>> .theirs
    $('.nav_wrapper').load('/SEEC/hejie/page-wjy/nav.html',function(){
    $('.footer').load('./footer.html')
       var sc =  document.createElement("script");
    $('.nav_wrapper').load('./nav.html', function () {
       sc.src= "../js/nav.js";
        var sc = document.createElement("script");
       $("body").append(sc);
        sc.src = "../js/nav.js";
        $("body").append(sc);
    });

    //下拉城市
    $('.selectCity').click(function () {
        $('.select-city .cities').css({
            display: 'block'
        })
    })
    $('.cities li').hover(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.cities .li').click(function () {
        var index = $(this).index() - 1
        var str = $(this).html()
        $('.my-city').html(str);
        $('.cities').css({
            display: 'none'
        })
        $.ajax({
            url: '../js/date.json',
            dataType: "json",
            type: 'get',
            success: (data) => {
                console.log(index);
                var str1 = ''
                for (let i = 0; i < data.data.length; i++) {
                    $('.phone').html(`<b class="tel">联系电话</b><div class="txt"><p>${data.data[index].phone}</p></div>`);
                    $('.ason_nearby_centre').html(`<p class="ason_nearby_centre">${data.data[index].title}</p>`);
                    $('.center-right').html(
                        `<img src="${data.data[index].imgSrc}" alt="">`);
                    $('.right_introduce').html(`<div class="right_introduce">${data.data[index].text}</div>`);
                }
                for (let j = 0; j < data.data[index].address.length; j++) {
                    str1 += `<p>${data.data[index].address[j]}</p>`;
                    $('.txt').html(str1);
                }
                var map = new BMap.Map('allmap');
                map.centerAndZoom(new BMap.Point(data.data[index].lat, data.data[index].log), 12);
                var opts = {
                    width: 300,
                    height: 280
                }
                var infoWindow = new BMap.InfoWindow(
                    `<div class="ason-map-div_box">
                        <div class="ason-map-div">
                            <strong>${data.data[index].title}</strong>
                            <div class="col">
                                <b>地址</b>
                                <p>${data.data[index].address[0]}</p>
                                <p>${data.data[index].address[1]}</p>
                                <p>${data.data[index].address[2]}</p>
                                <p>${data.data[index].address[3]}</p>
                            </div>
                            <div class="col">
                                <b>联系电话</b>
                                <p>010-85185058</p>
                            </div>
                            <div class="col">
                                <b>工作时间</b>
                                <p>周一至周五&nbsp;10:00 - 21:30</p>
                                <p>周六至周日&nbsp;10:00 - 19:00</p>
                            </div>
                        </div>
                    </div>`,
                    opts);
                map.openInfoWindow(infoWindow, map.getCenter());

            }
        })
    })
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.41866394, 39.91600266)
    map.centerAndZoom(point, 14);
    // 添加带有定位的导航控件
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
    });
    // var geolocationControl = new BMap.GeolocationControl();
    var opts = {
        width: 300,
        height: 280
    }
    var html = `
            <div class="ason-map-div_box">
                <div class="ason-map-div">
                    <strong>东方广场中心</strong>
                    <div class="col">
                        <b>地址</b>
                        <p>北京市东城区</p>
                        <p>东长安街 1 号</p>
                        <p>东方广场 W3 座 2 层</p>
                        <p>邮编：100738</p>
                        <p>（地铁 1 号线王府井站 A 出口）</p>
                    </div>
                    <div class="col">
                        <b>联系电话</b>
                        <p>010-85185058</p>
                    </div>
                    <div class="col">
                        <b>工作时间</b>
                        <p>周一至周五&nbsp;10:00 - 21:30</p>
                        <p>周六至周日&nbsp;10:00 - 19:00</p>
                    </div>
                </div>
            </div>`
    var myIcon = new BMap.Icon("https://wse.com.cn/_ui/responsive/theme-alpha/img/center/our-map-tag.png", new BMap.Size(30, 35))
    var pt = new BMap.Point(116.41866394, 39.91600266);
    var marker = new BMap.Marker(pt, {
        icon: myIcon
    });
    // 将标注添加到地图
    map.addOverlay(marker);
    var infoWindow = new BMap.InfoWindow(html, opts);
    map.openInfoWindow(infoWindow, point)
    // map.addControl(geolocationControl);


})
