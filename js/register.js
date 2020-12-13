$('.active-two').click(function(){
	$(".form-two").show();
	$(".form-one").hide();
	$(".active-two").css("background-color","#043458")
	$(".active-two").css("color","#fff")
	$(".active-one").css("background-color","#fff")
	$(".active-one").css("color","#043458")
})
$('.active-one').click(function(){
	$(".form-one").show();
	$(".form-two").hide();
	$(".active-one").css("background-color","#043458")
	$(".active-one").css("color","#fff")
	$(".active-two").css("background-color","#fff")
	$(".active-two").css("color","#043458")
})
// $(".foot").load("/Wall-Street/pages/wll-demo/foot.html")