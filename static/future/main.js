$(document).ready(function() {
	// 将某元素“钉”在容器内
	$(".pin_inner").pin({
		containerSelector: ".pin_outer"
	});

	// 解析时间
	var nodes = $('.timeago');
	var timeagoInstance = timeago();
	timeagoInstance.render(nodes, 'zh_CN');
	timeago.cancel();

	// fade in .back-to-top
	$(window).scroll(function() {
		if($(this).scrollTop() > 500) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('.back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0,
			easing: 'swing'
		}, 750);
		return false;
	});

	$('.mytooltip').tooltipster({
		theme: 'tooltipster-shadow'
	});

	//启动轮播效果
	$('.banner').unslider({
		speed: 500, //  The speed to animate each slide (in milliseconds)
		delay: 3000, //  The delay between slide animations (in milliseconds)
		complete: function() {}, //  A function that gets called after every slide animation
		keys: true, //  Enable keyboard (left, right) arrow shortcuts
		dots: true, //  Display dot navigation
		fluid: true, //  Support responsive design. May break non-responsive designs
		autoplay: true,
		arrows: false, // 是否显示上一页，下一页的箭头
	});
});