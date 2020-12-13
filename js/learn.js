//顶部导航条
$(function(){
    $('.nav_wrapper').load('/SEEC/hejie/page-wjy/nav.html',function(){
       var sc =  document.createElement("script");
       sc.src= "../js/nav.js";
       $("body").append(sc);
    });
})
$('.footer').load('./footer.html')


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
var geolocationControl = new BMap.GeolocationControl();
var opts = {
    width: 300,
    height: 280,
}
var html = `
<div class="ason-map-div_box">
    <div class="ason-map-div">
        <strong>东方广场中心</strong>
        <div class="col">
            <b>地址</b>
            <p>北京市东城区<br>东长安街 1 号<br>东方广场 W3 座 2 层<br>邮编：100738<br>（地铁 1 号线王府井站 A 出口）</p>
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
var myIcon = new BMap.Icon("https://api.map.baidu.com/images/blank.gif", new BMap.Size(15, 15))
var pt = new BMap.Point(116.41866394, 39.91600266);
var marker = new BMap.Marker(pt, {
    icon: myIcon
});
// 将标注添加到地图
map.addOverlay(marker);
var infoWindow = new BMap.InfoWindow(html, opts);
map.openInfoWindow(infoWindow, point)
map.addControl(geolocationControl);
