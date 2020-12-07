$('.nov_top_left li').click(function (){
	$('.nov_top_left li').eq($(this).index()).addClass('active').siblings().removeClass('active')
})
$('.mobile_menu_trigger').click(function () {
	$('.mobile_menu_first').hide()
	$('.mobile_menu_wrapper').show().addClass('animate__animated animate__fadeInRight')
	$('.model').show()
<<<<<<< HEAD
=======
	// $('.a').css({
	// 	"margin-top": $('.mobile_menu_wrapper').height()
	// })
>>>>>>> 01625a2b3e94942a21410e279bd0b0915e8e15ff
})
$('.close').click( function () {
	$('.mobile_menu_first').show()
	$('.mobile_menu_wrapper').hide()
	$('.model').hide()
})
$('.content_ul .ul li').click( function () {
	$('.content_ul .ul li').eq($(this).index()).addClass('active').siblings().removeClass('active')
})
let menu = $('.second_menu')
$('.nav_links li a.dropdown').click(function () {
	
	$('.plus .right').css({
		"transform": "rotate(135deg)",
		"top": '-14px'
	})
	if(menu.hasClass('animate__animated animate__fadeInDown')) {
		menu.removeClass('animate__animated animate__fadeInDown')
		menu.hide()
		$('.plus .right').css({
			"transform": "rotate(45deg)",
		})
	} else {
		menu.addClass('animate__animated animate__fadeInDown')
		menu.show()
	}
})
$('.navigation-bottom li').eq(0).hover(function () {
	$(this).children('.second_menu3').show()
	$('.navigation-bottom .right').css({
		"transform":"rotate(315deg)",
		"top": "14px",
		"left": "35px"
	})
}, function () {
	$(this).children('.second_menu3').hide()
	$('.navigation-bottom .right').css({
		"transform":"rotate(135deg)",
		"top": "3px",
		"left": "40px"
	})
})
$('.si').hover(function () {
	$('.si').children('.second_menu2').show()
	$('.navigation-bottom .left').css({
		"transform":"rotate(315deg)",
		"top": "5px",
		"right": "25px"
	})
}, function () {
	$('.si').children('.second_menu2').hide()
	$('.navigation-bottom .left').css({
		"transform":"rotate(135deg)",
		"top": "-6px",
		"right": "20px"
	})
})


$(document).scroll(function() {
	var scroH = $(document).scrollTop();  //滚动高度
	if(scroH > 200){  //距离顶部大于100px时
		$('.js-mainHeader').hide()
		$('.slideInDownMenu').addClass('fix')
	} else {
		$('.js-mainHeader').show()
		$('.slideInDownMenu').removeClass('fix')
	}
})