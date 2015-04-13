/*var $touchSlide = $(".touchslider");
var $circle = $touchSlide.find('.circle');
$touchSlide.find('.touchslider-item img').css({
	width: $touchSlide.width()
});

var height = $touchSlide.find('.touchslider-item img').height();
if(height){
	$touchSlide.find('.touchslider-viewport').height(height);
}
$touchSlide.touchSlider({
	mouseTouch: true,
	viewport: ".container",
	margin: 0,
	onSwitchComplete : function (ret) {
		$circle.find('span').removeClass('active')
			.eq(ret.current).addClass('active');
		switchTxt(ret.current);
	}
});*/