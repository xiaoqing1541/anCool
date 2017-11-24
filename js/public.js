$(function(){
	$('.nav>li').click(function(){
	$('.nav>li').removeClass('active');
	$(this).addClass('active');
});
$(document).scroll(heNav);
	function heNav(){
	//可视区高度
	var viewH = $(window).height();
	//滚动距离
	var scrollH = $(document).scrollTop();
	if(scrollH >80){
		$('header').addClass('white');
	}else{
		$('header').removeClass('white');
	}
				}
})
