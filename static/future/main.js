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

	/*========== back-to-top button ==========*/
	$('body').append('<div class="back-to-top"><i class="fa fa-angle-up fa-3x"></i></div>');
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
			},
			750);
		return false;
	});
	/*========== back-to-top button ==========*/

	$('.mytooltip').tooltipster({
		theme: 'tooltipster-shadow'
	});

});

function init_unslider() {
	//启动轮播效果
	$('.banner').unslider({
		speed: 500,
		//  The speed to animate each slide (in milliseconds)
		delay: 3000,
		//  The delay between slide animations (in milliseconds)
		complete: function() {},
		//  A function that gets called after every slide animation
		keys: true,
		//  Enable keyboard (left, right) arrow shortcuts
		dots: true,
		//  Display dot navigation
		fluid: true,
		//  Support responsive design. May break non-responsive designs
		autoplay: true,
		arrows: false,
		// 是否显示上一页，下一页的箭头
	});
}

function get_url(type) {
	var url = "";
	if(1 == type) {
		url = '/index' + $("input[name='go_page']").val() + '.html';
	} else if(2 == type) {
		url = '/admin/article/list?page=' + $("input[name='go_page']").val();
	}
	return url;
}

function init_pagebar1(type) {
	var url = "";

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
			window.location.href = get_url(type); // get_url这个函数不能放到validate之外去执行，否则可能找不到go_page元素
		},
		submitHandler: function() {
			$.get(get_url(type)); // get_url这个函数不能放到validate之外去执行，否则可能找不到go_page元素
		},
		// 指明错误放置的位置，默认情况是：error.appendTo(element.parent());即把错误信息放在验证的元素后面。
		errorPlacement: function(error, element) {
			toastr.error(error[0].innerText);
		},
	});
}

function each_markdown_to_html() {
	$("div[id^='test-editormd-view2-']").each(function() {
		var testEditormdView2;
		// $(this)[0].id  获取id名字
		testEditormdView2 = editormd.markdownToHTML($(this)[0].id, {
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
	});
}

Vue.directive('my-directive', {
	bind: function() {
		// 做绑定的准备工作
		// 比如添加事件监听器，或是其他只需要执行一次的复杂操作
	},
	update: function(newValue, oldValue) {
		// 根据获得的新值执行对应的更新
		// 对于初始值也会被调用一次
		alert(1);
	},
	unbind: function() {
		// 做清理工作
		// 比如移除在 bind() 中添加的事件监听器
	}
})

function GetUrlRelativePath()
{
    var url = document.location.toString();
    var arrUrl = url.split("//");
    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
    if(relUrl.indexOf("?") != -1){
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}

var vm_home = new Vue({
	el: '#app',
	data: {
		list: [],
		input: "# hello",
	}
});

function init_pagebar3(init_page, pagesize, total, nexturl) {
	$('#paging-box').paging({
		initPageNo: init_page, // 初始页码
		totalPages: parseInt(total / pagesize), //总页数
		totalCount: '合计' + total + '条数据', // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			old_page = sessionStorage.getItem(nexturl); // nexturl="/page"
			sessionStorage.setItem(nexturl, page);
			var url = nexturl + page + '.html' + window.location.search; // window.location.search 是浏览器中GET请求时候的地址参数
			if(null != old_page && old_page != page) {
				$.ajax({
					url: url,
					cache: true,
					type: 'get',
					success: function(result) {
						if(0 != result.code) {
							toastr.error("code:" + result.code + " message:" + result.message);
						} else {
							//toastr.success(result.message);
							if(result.data.list) {
								$('#articles').html('');
								result.data.list.forEach(function(value, index, array) {
									// https://vuejs.org/v2/examples/  这里换了个方式解析markdown，没用原来的editormd.markdownToHTML，主要是vue改了数据后，没有更新DOM，jquery的方式获取不到标签
									value.Digest = marked(value.Digest, {
										sanitize: true
									});
									vm_home.$set(vm_home.list, index, value);
								});
								history.replaceState({}, "", url); // change path in browser.
								$('.back-to-top').click(); // go back to top.
							}
						}
					}
				});
			}
		}
	});
}

function init_pagebar(init_page, pagesize, total, vm, url) {
	$('#paging-box').paging({
		initPageNo: init_page, // 初始页码
		totalPages: parseInt(total / pagesize), //总页数
		totalCount: '合计' + total + '条数据', // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			var newUrl = url + page + '.html'
			$.ajax({
				url: newUrl,
				cache: true,
				type: 'get',
				success: function(result) {
					if(0 != result.code) {
						toastr.error("code:" + result.code + " message:" + result.message);
					} else {
						//console.info(result.data.list);
						//toastr.success(result.message);
						vm.list = result.data.list;
						history.replaceState({}, "", newUrl); // change path in browser.
						$('.back-to-top').click();
					}
				}
			});
		}
	});
}

function checkall(name, obj) {
	$(":checkbox[name='" + name + "']").each(function(o) {
		$(this).prop('checked', obj.checked);
	});
}

function del_confirm() {
	return confirm('一旦删除将不可恢复，确定吗？');
}

function confirm() {
	return confirm('确定操作？');
}

function del_timeline(timelineid) {
	if(confirm("确定要删除吗？")) {
		$.ajax({
			url: '/admin/timeline/delete?timelineid=' + timelineid,
			data: {
				timelineid: timelineid
			},
			type: 'delete',
			success: function(result) {
				if(0 != result.code) {
					toastr.error("code:" + result.code + " message:" + result.message);
				} else {
					toastr.success(result.message);
					window.location.href = "/admin/timeline/list";
				}
			}
		});
	}
}

function del_album(albumid) {
	if(confirm("确定要删除吗？")) {
		$.ajax({
			url: '/admin/album/delete?albumid=' + albumid,
			data: {
				albumid: albumid
			},
			type: 'delete',
			success: function(result) {
				if(0 != result.code) {
					toastr.error("code:" + result.code + " message:" + result.message);
				} else {
					toastr.success(result.message);
					window.location.href = "/admin/album/list";
				}
			}
		});
	}
}

function del_comment(id) {
	if(confirm("确定删除？")) {
		$.post('/comment', {
				id: id,
				flag: 3,
			},
			function(data) {
				if(0 != data.code) { // 返回0代表成功，其他失败
					toastr.error("code: " + data.code + " message: " + data.message);
				} else {
					toastr.success(data.message);
					location.reload();
				}
			});
	}
}

function add_window_of_edit_article() {
	// load edit_article window
	$("body").append('<div class="modal fade" id="myModal" tabindex="-1" role="dialog">\
		<div class="modal-body">\
			<div id="toedit"></div></div>\
		<div class="modal-footer">\
			<button class="btn btn-warning" type="button" data-dismiss="modal">关闭</button></div>\
	    </div>');
}

function edit_article(id) {
	// document.documentElement.clientHeight 可见区域高度 
	var height = document.documentElement.clientHeight * 0.93;
	$('#toedit').html('<iframe width="100%" height="' + height + '" frameborder="0" src="/article/editmarkdown?id=' + id + '"></iframe>');
	$('#myModal').modal('show');
}

function get_recomment_photos() {
	var pagesize = 4;
	var page = 1;
	var pagemax = 1;
	var recommend_total = pagesize;
	if(window.localStorage) {
		// 浏览器支持localstorage
		recommend_total = window.localStorage.recommend_total;
	}
	pagemax = recommend_total / pagesize; // float类型
	/* Math.random()*(n-m)+m; // 返回指定范围的随机数(m-n之间)的公式,Math.random()返回的是0~1之间的浮点数*/
	page = Math.floor(Math.random() * (pagemax - 1) + 1); // 返回1-10的随机数

	$.ajax({
		url: "/blog/photo/recommend",
		type: "get",
		cache: true,
		async: true,
		data: {
			page: page,
			pagesize: pagesize,
		},
		success: function(result) {
			if(0 != result.code) { // 返回0代表成功，其他失败
				toastr.error("code: " + result.code + " message: " + result.message);
			} else {
				var str = "";
				if(result.data.list) {
					result.data.list.forEach(function(value, index, array) {
						str += '<article class="mini-post box-shadow-1 wrap"><header>\
								<h3><a href="#">' + value.Des + '</a></h3>\
								<time class="published" datetime="2015-10-20">' + value.Albumname + '</time>\
								<a href="#" class="author mytooltip" title="' + value.Username + '"><img src="' + value.Avatarurl + '" alt="" /></a></header>\
							<a href="/blog/album' + value.Albumid + '.html" class="image"><img src="' + value.Url + '" alt="" /></a></article>';
					});
					if(str != "") {
						$('#recommend_photos').html(str);
					}
				}
				if(window.localStorage) {
					// 浏览器支持localstorage
					window.localStorage.setItem('recommend_total', result.data.count);
				}
			}
		}
	});
}

function init_masonry() {
	// 瀑布流
	var $container = $('.masonry-container');
	$container.imagesLoaded(function() {
		$container.masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-item'
		});
	});
}

function init_masonry_container(container) {
	// 瀑布流
	container.imagesLoaded(function() {
		container.masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-item'
		});
	});
}

function author(name, userid) {
	toastr.info('作者：' + name);
	window.location.href = "/user/" + userid;
}

function follow(name) {
	toastr.warning('+关注：' + name);
}

function likeit(myself) {
	toastr.success('此文已经被浏览' + myself.text() + '次!');
	$(myself).removeClass("glyphicon-heart-empty").addClass("glyphicon-heart");
}

/*
		// toastr的配置，也可以不配置，使用默认值。
		toastr.options = {
		        "closeButton": false, //是否显示关闭按钮
		        "debug": false, //是否使用debug模式
		        "positionClass": "toast-top-right",//弹出窗的位置
		        "showDuration": "300",//显示的动画时间
		        "hideDuration": "1000",//消失的动画时间
		        "timeOut": "5000", //展现时间
		        "extendedTimeOut": "1000",//加长展示时间
		        "showEasing": "swing",//显示时的动画缓冲方式
		        "hideEasing": "linear",//消失时的动画缓冲方式
		        "showMethod": "fadeIn",//显示时的动画方式
		        "hideMethod": "fadeOut" //消失时的动画方式
		       };
		       */

/*可供选择的设置选项
closeButton: true
是否在通知弹窗上面显示关闭按钮，true：显示；false：不显示

debug: true
是否开起debug

progressBar: false
是否显示进度条，当为false时候不显示；当为true时候，显示进度条，当进度条缩短到0时候，消息通知弹窗消失

positionClass: 'toast-top-right'
位置信息，消息弹窗显示的位置，可以显示的位置对应的值
1.toast-top-right
2.toast-botton-right
3.toash-bottom-left
4.toast-top-left
5.toast-top-full-width 这个是在网页顶端，宽度铺满整个屏幕
6.toast-bottom-full-width
7.toast-top-center顶端中间
8.toast-bottom-center

onclick: null
showDuration: "300"
显示动作（从无到有这个动作）持续的时间

hideDuration: "1000"
隐藏动作持续的时间

timeOut: "5000"
间隔的时间


extendedTimeOut: "1000"

showEasing: "swing",
hideEasing: "linear",
showMethod: "fadeIn"

显示的方式，和jquery相同，可以是show()


hideMethod: "fadeOut"
隐藏的方式，和jquery相同，可以是hide()



toastr['error']('I am yanying', 'title');
其中的error为显示的通知的样式类型，有4种选择
1.success 成功，绿色
2.info 信息，蓝色
3.warning，警告，橙色
4.error，错误，深红色
其中第一个参数为显示的内容，第二个参数为显示的标题，标题可以省略*/

/*
//<script src="https://cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>
// 将当前页面打快照截图
html2canvas(document.body).then(function(canvas) {
	//document.body.appendChild(canvas); // 追加到body后面

	// 图片导出为 png 格式
	var type = "png";
	var imgData = canvas.toDataURL(type);
	//location = imgData; // 浏览器查看效果

	// 获取mimeType
	var _fixType = function(type) {
		type = type.toLowerCase().replace(/jpg/i, 'jpeg');
		var r = type.match(/png|jpeg|bmp|gif/)[0];
		return 'image/' + r;
	};

	// 加工image data，替换mime type
	imgData = imgData.replace(_fixType(type), 'image/octet-stream');

	// 在本地进行文件保存
	var saveFile = function(data, filename) {
		var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
		save_link.href = data;
		save_link.download = filename;

		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		save_link.dispatchEvent(event);
	};

	// 下载后的问题名
	var filename = 'baidufe_' + (new Date()).getTime() + '.' + type;
	saveFile(imgData, filename);
});*/
