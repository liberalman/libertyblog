$(function() {
	var testEditormdView2;
	testEditormdView2 = editormd.markdownToHTML("test-editormd-view2", {
		htmlDecode: "style,script,iframe", // you can filter tags decode
		emoji: true,
		tocm: true,
		taskList: true,
		tex: true, // 默认不解析
		flowChart: true, // 默认不解析
		sequenceDiagram: true, // 默认不解析
		mermaid: true, // mermaid图
		viz: true, // WebGraphviz
	});

	add_window_of_edit_article();

	/*var ua = navigator.userAgent.toLowerCase();
	var isWeixin = ua.indexOf('micromessenger') != -1;
	if(isWeixin) {
		console.info('您用的微信浏览器');
	}*/
	/*console.info(navigator);
	var platform = navigator.platform;
	document.writeln(navigator.platform + '</br>');*/
	/*
	 * 智能机浏览器版本信息:
	 *
	 */
	//var browser = {
	//	versions: function() {
	//		var u = navigator.userAgent,
	//			app = navigator.appVersion;
	//		return { //移动终端浏览器版本信息
	//			trident: u.indexOf('Trident') > -1, //IE内核
	//			presto: u.indexOf('Presto') > -1, //opera内核
	//			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	//			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	//			mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
	//			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	//			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	//			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
	//			iPad: u.indexOf('iPad') > -1, //是否iPad
	//			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
	//		};
	//	}(),
	//	language: (navigator.browserLanguage || navigator.language).toLowerCase()
	//}
	/*document.writeln("语言版本: "+browser.language + '</br>');
	document.writeln(" 是否为移动终端: "+ browser.versions.mobile + '</br>');
	document.writeln(" ios终端: "+browser.versions.ios + '</br>');
	document.writeln(" android终端: "+browser.versions.android + '</br>');
	document.writeln(" 是否为iPhone: "+browser.versions.iPhone + '</br>');
	document.writeln(" 是否iPad: "+browser.versions.iPad + '</br>');
	document.writeln(navigator.userAgent + '</br>');*/

	$("#btn_echo2article").click(function() {
		$.post('/comment',
			$("#form_echo2article").serialize(),
			function(data) {
				if(0 != data.code) { // 返回0代表成功，其他失败
					toastr.error("code: " + data.code + " message: " + data.message);
				} else {
					toastr.success(data.message);
					location.reload();
				}
			});
	});

	$(".echo2someone").submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: "/comment",
			type: "POST",
			cache: false,
			async: true,
			data: $(this).serialize(),
			success: function(data) {
				if(0 != data.code) { // 返回0代表成功，其他失败
					toastr.error("code: " + data.code + " message: " + data.message);
				} else {
					toastr.success(data.message);
					location.reload();
				}
			}
		});
		return false; // 要使用 return false 拦截页面提交
	});

});