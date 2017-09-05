
/*global Qiniu */
/*global plupload */
/*global FileProgress */
$(function() {
	var uploader = Qiniu.uploader({
		disable_statistics_report: false,
		runtimes: 'html5,flash,html4',
		browse_button: 'pickfiles',
		container: 'container',
		drop_element: 'container',
		max_file_size: '10mb',
		flash_swf_url: 'bower_components/plupload/js/Moxie.swf',
		dragdrop: true,
		chunk_size: '4mb',
		multi_selection: !(moxie.core.utils.Env.OS.toLowerCase() === "ios"),
		uptoken_url: $('#uptoken_url').val(),
		// uptoken_func: function(){
		//     var ajax = new XMLHttpRequest();
		//     ajax.open('GET', $('#uptoken_url').val(), false);
		//     ajax.setRequestHeader("If-Modified-Since", "0");
		//     ajax.send();
		//     if (ajax.status === 200) {
		//         var res = JSON.parse(ajax.responseText);
		//         console.log('custom uptoken_func:' + res.uptoken);
		//         return res.uptoken;
		//     } else {
		//         console.log('custom uptoken_func err');
		//         return '';
		//     }
		// },
		domain: $('#domain').val(),
		get_new_uptoken: false,
		//downtoken_url: '/downtoken',
		// unique_names: true,
		// save_key: true,
		// x_vars: {
		//     'id': '1234',
		//     'time': function(up, file) {
		//         var time = (new Date()).getTime();
		//         // do something with 'time'
		//         return time;
		//     },
		// },
		auto_start: true,
		log_level: 1,
		init: {
			'BeforeChunkUpload': function(up, file) {
				console.log("before chunk upload:", file.name);
			},
			'FilesAdded': function(up, files) {
				$('table').show();
				$('#success').hide();
				plupload.each(files, function(file) {
					var progress = new FileProgress(file, 'fsUploadProgress');
					progress.setStatus("等待...");
					progress.bindUploadCancel(up);
				});
			},
			'BeforeUpload': function(up, file) {
				console.log("this is a beforeupload function from init");
				var progress = new FileProgress(file, 'fsUploadProgress');
				var chunk_size = plupload.parseSize(this.getOption(
					'chunk_size'));
				if(up.runtime === 'html5' && chunk_size) {
					progress.setChunkProgess(chunk_size);
				}
			},
			'UploadProgress': function(up, file) {
				var progress = new FileProgress(file, 'fsUploadProgress');
				var chunk_size = plupload.parseSize(this.getOption(
					'chunk_size'));
				progress.setProgress(file.percent + "%", file.speed,
					chunk_size);
			},
			'UploadComplete': function() {
				$('#success').show();
			},
			'FileUploaded': function(up, file, info) {
				var progress = new FileProgress(file, 'fsUploadProgress');
				console.log("response:", info.response);
				progress.setComplete(up, info.response);
			},
			'Error': function(up, err, errTip) {
				$('table').show();
				var progress = new FileProgress(err.file, 'fsUploadProgress');
				progress.setError();
				progress.setStatus(errTip);
			},
			'Key': function(up, file) {
				// 若想在前端对每个文件的key进行个性化处理，可以配置该函数
				// 该配置必须要在unique_names: false，save_key: false时才生效
				var str = String(file.type);
				var num = /[^/]*$/; // 截取最后一个'/'之后的内容
				var type = num.exec(str);
				var key = "photo/" + file.id + "." + type;
				return key
			},
		}
	});
	//uploader.init();
	uploader.bind('BeforeUpload', function() {
		console.log("hello man, i am going to upload a file");
	});
	uploader.bind('FileUploaded', function() {
		console.log('hello man,a file is uploaded');
	});
	$('#container').on(
		'dragenter',
		function(e) {
			e.preventDefault();
			$('#container').addClass('draging');
			e.stopPropagation();
		}
	).on('drop', function(e) {
		e.preventDefault();
		$('#container').removeClass('draging');
		e.stopPropagation();
	}).on('dragleave', function(e) {
		e.preventDefault();
		$('#container').removeClass('draging');
		e.stopPropagation();
	}).on('dragover', function(e) {
		e.preventDefault();
		$('#container').addClass('draging');
		e.stopPropagation();
	});

	$('#show_code').on('click', function() {
		$('#myModal-code').modal();
		$('pre code').each(function(i, e) {
			hljs.highlightBlock(e);
		});
	});

	$('body').on('click', 'table button.btn', function() {
		$(this).parents('tr').next().toggle();
	});

	var getRotate = function(url) {
		if(!url) {
			return 0;
		}
		var arr = url.split('/');
		for(var i = 0, len = arr.length; i < len; i++) {
			if(arr[i] === 'rotate') {
				return parseInt(arr[i + 1], 10);
			}
		}
		return 0;
	};

	$('#myModal-img .modal-body-footer').find('a').on('click', function() {
		var img = $('#myModal-img').find('.modal-body img');
		var key = img.data('key');
		var oldUrl = img.attr('src');
		var originHeight = parseInt(img.data('h'), 10);
		var fopArr = [];
		var rotate = getRotate(oldUrl);
		if(!$(this).hasClass('no-disable-click')) {
			$(this).addClass('disabled').siblings().removeClass('disabled');
			if($(this).data('imagemogr') !== 'no-rotate') {
				fopArr.push({
					'fop': 'imageMogr2',
					'auto-orient': true,
					'strip': true,
					'rotate': rotate,
					'format': 'png'
				});
			}
		} else {
			$(this).siblings().removeClass('disabled');
			var imageMogr = $(this).data('imagemogr');
			if(imageMogr === 'left') {
				rotate = rotate - 90 < 0 ? rotate + 270 : rotate - 90;
			} else if(imageMogr === 'right') {
				rotate = rotate + 90 > 360 ? rotate - 270 : rotate + 90;
			}
			fopArr.push({
				'fop': 'imageMogr2',
				'auto-orient': true,
				'strip': true,
				'rotate': rotate,
				'format': 'png'
			});
		}

		$('#myModal-img .modal-body-footer').find('a.disabled').each(
			function() {

				var watermark = $(this).data('watermark');
				var imageView = $(this).data('imageview');
				var imageMogr = $(this).data('imagemogr');

				if(watermark) {
					fopArr.push({
						fop: 'watermark',
						mode: 1,
						image: 'http://www.b1.qiniudn.com/images/logo-2.png',
						dissolve: 100,
						gravity: watermark,
						dx: 100,
						dy: 100
					});
				}

				if(imageView) {
					var height;
					switch(imageView) {
						case 'large':
							height = originHeight;
							break;
						case 'middle':
							height = originHeight * 0.5;
							break;
						case 'small':
							height = originHeight * 0.1;
							break;
						default:
							height = originHeight;
							break;
					}
					fopArr.push({
						fop: 'imageView2',
						mode: 3,
						h: parseInt(height, 10),
						q: 100,
						format: 'png'
					});
				}

				if(imageMogr === 'no-rotate') {
					fopArr.push({
						'fop': 'imageMogr2',
						'auto-orient': true,
						'strip': true,
						'rotate': 0,
						'format': 'png'
					});
				}
			});

		var newUrl = Qiniu.pipeline(fopArr, key);

		var newImg = new Image();
		img.attr('src', 'images/loading.gif');
		newImg.onload = function() {
			img.attr('src', newUrl);
			img.parent('a').attr('href', newUrl);
		};
		newImg.src = newUrl;
		return false;
	});

});

/*global plupload */
/*global qiniu */
function FileProgress(file, targetID) {
	this.fileProgressID = file.id;
	this.file = file;

	this.opacity = 100;
	this.height = 0;
	this.fileProgressWrapper = $('#' + this.fileProgressID);
	if(!this.fileProgressWrapper.length) {
		// <div class="progress">
		//   <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
		//     <span class="sr-only">20% Complete</span>
		//   </div>
		// </div>

		this.fileProgressWrapper = $('<tr></tr>');
		var Wrappeer = this.fileProgressWrapper;
		Wrappeer.attr('id', this.fileProgressID).addClass('progressContainer');

		var progressText = $("<td/>");
		progressText.addClass('progressName').text(file.name);

		var fileSize = plupload.formatSize(file.size).toUpperCase();
		var progressSize = $("<td/>");
		progressSize.addClass("progressFileSize").text(fileSize);

		var progressBarTd = $("<td/>");
		var progressBarBox = $("<div/>");
		progressBarBox.addClass('info');
		var progressBarWrapper = $("<div/>");
		progressBarWrapper.addClass("progress progress-striped");

		var progressBar = $("<div/>");
		progressBar.addClass("progress-bar progress-bar-info")
			.attr('role', 'progressbar')
			.attr('aria-valuemax', 100)
			.attr('aria-valuenow', 0)
			.attr('aria-valuein', 0)
			.width('0%');

		var progressBarPercent = $('<span class=sr-only />');
		progressBarPercent.text(fileSize);

		var progressCancel = $('<a href=javascript:; />');
		progressCancel.show().addClass('progressCancel').text('×');

		progressBar.append(progressBarPercent);
		progressBarWrapper.append(progressBar);
		progressBarBox.append(progressBarWrapper);
		progressBarBox.append(progressCancel);

		var progressBarStatus = $('<div class="status text-center"/>');
		progressBarBox.append(progressBarStatus);
		progressBarTd.append(progressBarBox);

		Wrappeer.append(progressText);
		Wrappeer.append(progressSize);
		Wrappeer.append(progressBarTd);

		$('#' + targetID).append(Wrappeer);
	} else {
		this.reset();
	}

	this.height = this.fileProgressWrapper.offset().top;
	this.setTimer(null);
}

FileProgress.prototype.setTimer = function(timer) {
	this.fileProgressWrapper.FP_TIMER = timer;
};

FileProgress.prototype.getTimer = function(timer) {
	return this.fileProgressWrapper.FP_TIMER || null;
};

FileProgress.prototype.reset = function() {
	this.fileProgressWrapper.attr('class', "progressContainer");
	this.fileProgressWrapper.find('td .progress .progress-bar-info').attr(
		'aria-valuenow', 0).width('0%').find('span').text('');
	this.appear();
};

FileProgress.prototype.setChunkProgess = function(chunk_size) {
	var chunk_amount = Math.ceil(this.file.size / chunk_size);
	if(chunk_amount === 1) {
		return false;
	}

	var viewProgess = $('<button class="btn btn-default">查看分块上传进度</button>');

	var progressBarChunkTr = $(
		'<tr class="chunk-status-tr"><td colspan=3></td></tr>');
	var progressBarChunk = $('<div/>');
	for(var i = 1; i <= chunk_amount; i++) {
		var col = $('<div class="col-md-2"/>');
		var progressBarWrapper = $('<div class="progress progress-striped"></div');

		var progressBar = $("<div/>");
		progressBar.addClass("progress-bar progress-bar-info text-left")
			.attr('role', 'progressbar')
			.attr('aria-valuemax', 100)
			.attr('aria-valuenow', 0)
			.attr('aria-valuein', 0)
			.width('0%')
			.attr('id', this.file.id + '_' + i)
			.text('');

		var progressBarStatus = $('<span/>');
		progressBarStatus.addClass('chunk-status').text();

		progressBarWrapper.append(progressBar);
		progressBarWrapper.append(progressBarStatus);

		col.append(progressBarWrapper);
		progressBarChunk.append(col);
	}

	if(!this.fileProgressWrapper.find('td:eq(2) .btn-default').length) {
		this.fileProgressWrapper.find('td>div').append(viewProgess);
	}
	progressBarChunkTr.hide().find('td').append(progressBarChunk);
	progressBarChunkTr.insertAfter(this.fileProgressWrapper);

};

FileProgress.prototype.setProgress = function(percentage, speed, chunk_size) {
	this.fileProgressWrapper.attr('class', "progressContainer green");

	var file = this.file;
	var uploaded = file.loaded;

	var size = plupload.formatSize(uploaded).toUpperCase();
	var formatSpeed = plupload.formatSize(speed).toUpperCase();
	var progressbar = this.fileProgressWrapper.find('td .progress').find(
		'.progress-bar-info');
	if(this.fileProgressWrapper.find('.status').text() === '取消上传') {
		return;
	}
	this.fileProgressWrapper.find('.status').text("已上传: " + size + " 上传速度： " +
		formatSpeed + "/s");
	percentage = parseInt(percentage, 10);
	if(file.status !== plupload.DONE && percentage === 100) {
		percentage = 99;
	}

	progressbar.attr('aria-valuenow', percentage).css('width', percentage + '%');

	if(chunk_size) {
		var chunk_amount = Math.ceil(file.size / chunk_size);
		if(chunk_amount === 1) {
			return false;
		}
		var current_uploading_chunk = Math.ceil(uploaded / chunk_size);
		var pre_chunk, text;

		for(var index = 0; index < current_uploading_chunk; index++) {
			pre_chunk = $('#' + file.id + "_" + index);
			pre_chunk.width('100%').removeClass().addClass('alert-success').attr(
				'aria-valuenow', 100);
			text = "块" + index + "上传进度100%";
			pre_chunk.next().html(text);
		}

		var currentProgessBar = $('#' + file.id + "_" + current_uploading_chunk);
		var current_chunk_percent;
		if(current_uploading_chunk < chunk_amount) {
			if(uploaded % chunk_size) {
				current_chunk_percent = ((uploaded % chunk_size) / chunk_size * 100).toFixed(
					2);
			} else {
				current_chunk_percent = 100;
				currentProgessBar.removeClass().addClass('alert-success');
			}
		} else {
			var last_chunk_size = file.size - chunk_size * (chunk_amount - 1);
			var left_file_size = file.size - uploaded;
			if(left_file_size % last_chunk_size) {
				current_chunk_percent = ((uploaded % chunk_size) / last_chunk_size *
					100).toFixed(2);
			} else {
				current_chunk_percent = 100;
				currentProgessBar.removeClass().addClass('alert-success');
			}
		}
		currentProgessBar.width(current_chunk_percent + '%');
		currentProgessBar.attr('aria-valuenow', current_chunk_percent);
		text = "块" + current_uploading_chunk + "上传进度" + current_chunk_percent +
			'%';
		currentProgessBar.next().html(text);
	}

	this.appear();
};

FileProgress.prototype.setComplete = function(up, info) {
	var td = this.fileProgressWrapper.find('td:eq(2)'),
		tdProgress = td.find('.progress');

	var res = $.parseJSON(info);
	var url;
	if(res.url) {
		url = res.url;
		str = "<div><strong>Link:</strong><a href=" + res.url +
			" target='_blank' > " + res.url + "</a></div>" +
			"<div class=hash><strong>Hash:</strong>" + res.hash + "</div>";
		if(undefined != res.url) {
			save_qiniu_response($('#albumid').val(), url, res.url);
		}

	} else {
		var domain = up.getOption('domain'); // 发起一次'OPTION'请求，测试一下是否可以跨域上传
		url = domain + encodeURI(res.key);
		var link = domain + res.key;
		str = "<div><strong>Link:</strong><a href=" + url + " target='_blank' > " +
			link + "</a></div>" +
			"<div class=hash><strong>Hash:</strong>" + res.hash + "</div>";

		if(undefined != res.key) {
			save_qiniu_response($('#albumid').val(), url, res.key);
		}
	}

	tdProgress.html(str).removeClass().next().next('.status').hide();
	td.find('.progressCancel').hide();

	var progressNameTd = this.fileProgressWrapper.find('.progressName');
	var imageView = '?imageView2/1/w/100/h/100';

	var isImage = function(url) {
		var res, suffix = "";
		var imageSuffixes = ["png", "jpg", "jpeg", "gif", "bmp"];
		var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

		if(!url || !suffixMatch.test(url)) {
			return false;
		}
		res = suffixMatch.exec(url);
		suffix = res[1].toLowerCase();
		for(var i = 0, l = imageSuffixes.length; i < l; i++) {
			if(suffix === imageSuffixes[i]) {
				return true;
			}
		}
		return false;
	};

	var isImg = isImage(url);

	var Wrapper = $('<div class="Wrapper"/>');
	var imgWrapper = $('<div class="imgWrapper col-md-3"/>');
	var linkWrapper = $('<a class="linkWrapper" target="_blank"/>');
	var showImg = $('<img src="images/loading.gif"/>');

	progressNameTd.append(Wrapper);

	if(!isImg) {
		showImg.attr('src', 'images/default.png');
		Wrapper.addClass('default');

		imgWrapper.append(showImg);
		Wrapper.append(imgWrapper);
	} else {
		linkWrapper.append(showImg);
		imgWrapper.append(linkWrapper);
		Wrapper.append(imgWrapper);

		var img = new Image();
		if(!/imageView/.test(url)) {
			url += imageView
		}
		$(img).attr('src', url);

		var height_space = 340;
		$(img).on('load', function() {
			showImg.attr('src', url);

			linkWrapper.attr('href', url).attr('title', '查看原图');

			function initImg(url, key, height) {
				$('#myModal-img').modal();
				var modalBody = $('#myModal-img').find('.modal-body');
				if(height <= 300) {
					$('#myModal-img').find('.text-warning').show();
				}
				var newImg = new Image();
				modalBody.find('img').attr('src', 'images/loading.gif');
				newImg.onload = function() {
					modalBody.find('img').attr('src', url).data('key', key).data(
						'h', height);
					modalBody.find('.modal-body-wrapper').find('a').attr('href',
						url);
				};
				newImg.src = url;
			}

			var infoWrapper = $('<div class="infoWrapper col-md-6"></div>');

			var fopLink = $('<a class="fopLink"/>');
			fopLink.attr('data-key', res.key).text('查看处理效果');
			infoWrapper.append(fopLink);
			fopLink.on('click', function() {
				var key = $(this).data('key');
				var height = parseInt($(this).parents('.Wrapper').find(
					'.origin-height').text(), 10);
				if(height > $(window).height() - height_space) {
					height = parseInt($(window).height() - height_space, 10);
				} else {
					height = parseInt(height, 10) || 300;
					//set a default height 300 for ie9-
				}
				var fopArr = [];
				fopArr.push({
					fop: 'imageView2',
					mode: 3,
					h: height,
					q: 100,
					format: 'png'
				});
				fopArr.push({
					fop: 'watermark',
					mode: 1,
					image: 'http://www.b1.qiniudn.com/images/logo-2.png',
					dissolve: 100,
					gravity: 'SouthEast',
					dx: 100,
					dy: 100
				});
				var url = Qiniu.pipeline(fopArr, key);
				$('#myModal-img').on('hide.bs.modal', function() {
					$('#myModal-img').find('.btn-default').removeClass(
						'disabled');
					$('#myModal-img').find('.text-warning').hide();
				}).on('show.bs.modal', function() {
					$('#myModal-img').find('.imageView').find('a:eq(0)').addClass(
						'disabled');
					$('#myModal-img').find('.watermark').find('a:eq(3)').addClass(
						'disabled');
					$('#myModal-img').find('.text-warning').hide();
				});

				initImg(url, key, height);

				return false;
			});

			var ie = Qiniu.detectIEVersion();
			if(!(ie && ie <= 9)) {
				var exif = Qiniu.exif(res.key);
				if(exif) {
					var exifLink = $('<a href="" target="_blank">查看exif</a>');
					exifLink.attr('href', url + '?exif');
					infoWrapper.append(exifLink);
				}

				var imageInfo = Qiniu.imageInfo(res.key);
				var infoArea = $('<div/>');
				var infoInner = '<div>格式：<span class="origin-format">' +
					imageInfo.format + '</span></div>' +
					'<div>宽度：<span class="orgin-width">' + imageInfo.width +
					'px</span></div>' +
					'<div>高度：<span class="origin-height">' + imageInfo.height +
					'px</span></div>';
				infoArea.html(infoInner);

				infoWrapper.append(infoArea);
			}

			Wrapper.append(infoWrapper);

		}).on('error', function() {
			showImg.attr('src', 'default.png');
			Wrapper.addClass('default');
		});
	}
};
FileProgress.prototype.setError = function() {
	this.fileProgressWrapper.find('td:eq(2)').attr('class', 'text-warning');
	this.fileProgressWrapper.find('td:eq(2) .progress').css('width', 0).hide();
	this.fileProgressWrapper.find('button').hide();
	this.fileProgressWrapper.next('.chunk-status-tr').hide();
};

FileProgress.prototype.setCancelled = function(manual) {
	var progressContainer = 'progressContainer';
	if(!manual) {
		progressContainer += ' red';
	}
	this.fileProgressWrapper.attr('class', progressContainer);
	this.fileProgressWrapper.find('td .progress').remove();
	this.fileProgressWrapper.find('td:eq(2) .btn-default').hide();
	this.fileProgressWrapper.find('td:eq(2) .progressCancel').hide();
};

FileProgress.prototype.setStatus = function(status, isUploading) {
	if(!isUploading) {
		this.fileProgressWrapper.find('.status').text(status).attr('class',
			'status text-left');
	}
};

// 绑定取消上传事件
FileProgress.prototype.bindUploadCancel = function(up) {
	var self = this;
	if(up) {
		self.fileProgressWrapper.find('td:eq(2) .progressCancel').on('click',
			function() {
				self.setCancelled(false);
				self.setStatus("取消上传");
				self.fileProgressWrapper.find('.status').css('left', '0');
				up.removeFile(self.file);
			});
	}

};

FileProgress.prototype.appear = function() {
	if(this.getTimer() !== null) {
		clearTimeout(this.getTimer());
		this.setTimer(null);
	}

	if(this.fileProgressWrapper[0].filters) {
		try {
			this.fileProgressWrapper[0].filters.item(
				"DXImageTransform.Microsoft.Alpha").opacity = 100;
		} catch(e) {
			// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
			this.fileProgressWrapper.css('filter',
				"progid:DXImageTransform.Microsoft.Alpha(opacity=100)");
		}
	} else {
		this.fileProgressWrapper.css('opacity', 1);
	}

	this.fileProgressWrapper.css('height', '');

	this.height = this.fileProgressWrapper.offset().top;
	this.opacity = 100;
	this.fileProgressWrapper.show();

};

// 修改图片描述
$('.photo_des').change(function() {
	$.ajax({
		url: "/admin/photo/edit",
		type: "POST",
		cache: false,
		async: true,
		data: {
			photoid: $(this).attr("photoid"),
			des: $(this).val()
		},
		success: function(data) {
			if(0 != data.code) { // 返回0代表成功，其他失败
				toastr.error("code: " + data.code + " message: " + data.message);
			} else {
				toastr.success(data.message);
			}
		}
	});
});

// 将七牛上传成功后的结果写入我们的服务器
function save_qiniu_response(albumid, fileurl, description) {
	$.ajax({
		url: "/admin/photo/qiniuphoto",
		type: "POST",
		cache: false,
		async: true,
		data: {
			albumid: albumid,
			url: fileurl,
			description: description,
			source: 1,
		},
		success: function(data) {
			if(0 != data.code) { // 返回0代表成功，其他失败
				toastr.error("code: " + data.code + " message: " + data.message);
			} else {
				toastr.success(data.message);
			}
		}
	});
	window.location.reload();
}