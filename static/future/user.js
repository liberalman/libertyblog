$(function() {
	$('#Grid').mixitup();
});

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
			location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

$(document).ready(function() {
	$('#nav').scrollToFixed();

	$('#darkside').click(function(e) {
		var $me = $(this),
			interval;

		e.preventDefault();

		/*
	 	text：气泡提示框中的文本。
		angle：气泡提示框的旋转角度。
		distance：气泡提示框距离目标的距离。
		showAfter：显示气泡提示框之前的延迟时间。
		hideAfter：多长时间之后隐藏气泡提示框。
		hasHideButton：是否显示关闭按钮。
		buttonHideText：关闭按钮的文本。
		type：气泡提示框的类型。
		onShow：显示提示框时的回调函数。
		onBeginHide：开始隐藏提示框时的回调函数。
		onHide：隐藏提示框之后的回调函数。
	 	*/

		$me.grumble({
			angle: 130,
			text: 'Look at me!',
			type: 'alt-',
			distance: 10,
			hideOnClick: true,
			onShow: function() {
				var angle = 130,
					dir = 1;
				interval = setInterval(function() {
					(angle > 220 ? (dir = -1, angle--) : (angle < 130 ? (dir = 1, angle++) : angle += dir));
					$me.grumble('adjust', {
						angle: angle
					});
				}, 25);
			},
			onHide: function() {
				clearInterval(interval);
			}
		});
	});
});