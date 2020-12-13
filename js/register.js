$(function () {
$('.province-wrapper input').click(function(){
	$('.cities').css({
		display:'block'
	})
	console.log(1)
})
$('.cities li').hover(function(){
	$(this).addClass('active').siblings().removeClass('active')
})
$('.cities .li').click(function(){
	let index = $(this).index()+1
	$('.province-wrapper input').val($(this).html())
	$('.cities').css({
		display:'none'
	})
})
let i = 0
$('.isAgree .checkbox').click(function(){
	console.log(231)
	i++;
	if(i%2==0){
		$('.select-checkbox').css({
			display:'none'
		})
	}else{
		$('.select-checkbox').css({
			display:'block'
		})
	}
	
})
})
