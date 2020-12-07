let falag=true
$('.ason-pc-unids').click(function(){
    $(this).addClass("tag").siblings().removeClass('tag');
    if(falag){
    $('.pub-rq').eq(0).addClass("undis").siblings().removeClass('undis');
    falag=!falag 
}else{
        $('.pub-rq').eq(1).addClass("undis").siblings().removeClass('undis');
        falag=!falag 
  
    }
    
})


 $('.nav_wrapper').load('../html/nav.html',function(){
   var sc =  document.createElement("script");
   sc.src= "../js/nav.js";
   $("body").append(sc);
});
   $('footer').load('../html/footer.html')
