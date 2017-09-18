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

	$("form[id='next_page']").validate({
		rules: {
			go_page: {
				required: true,
				number: true,
				digits: true,
				min: 1,
				max: 9999,
				minlength: 1,
				maxlength: 4,
			},
		},
		messages: {
			go_page: {
				required: '<font color="red">请输入页号</font>',
				minlength: '<font color="red">不能少于 1 个字符</font>',
				maxlength: '<font color="red">不能多于 4 个字符</font>',
				number: '<font color="red">请输入有效的数字</font>',
				min: '<font color="red">不能小于1</font>',
				max: '<font color="red">不能大于9999</font>',
				digits: '<font color="red">只能输入数字</font>',
			},
		},
		success: function(label) {
			//label.addClass('right').text('OK!');
			window.location.href = '/index' + $("input[name='go_page']").val() + '.html';
		},
		submitHandler: function(e) {
			e.preventDefault();
			window.location.href = '/index' + $("input[name='go_page']").val() + '.html';
		},
		// 指明错误放置的位置，默认情况是：error.appendTo(element.parent());即把错误信息放在验证的元素后面。
		errorPlacement: function(error, element) {
			toastr.error(error[0].innerText);
		},
	});
});