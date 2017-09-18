	(function($) {
		var $container = $('.masonry-container');
		$container.imagesLoaded(function() {
			$container.masonry({
				itemSelector: '.item',
				columnWidth: '.item'
			});
		});

		//Reinitialize masonry inside each panel after the relative tab link is clicked - 
		$('a[data-toggle=tab]').each(function() {
			var $this = $(this);
			$this.on('click', function() {
				$container.imagesLoaded(function() {
					$container.masonry({
						columnWidth: '.item',
						itemSelector: '.item'
					});
				});
			}); //end shown
		}); //end each

		// 在某个标签页已经显示之后触发和上面的each作用类似
		$('a[data-toggle=tab]').on('shown.bs.tab', function(e) {
			var activeTab = $(e.target).text();
			//console.info(e.target);
		});

		$('#myTab a[href="#third-tab-alt"]').click(function(e) {
			e.preventDefault(); //阻止a链接的跳转行为
			$.ajax({
				url: "/blog/photo/all",
				type: "get",
				cache: true,
				async: true,
				success: function(data) {
					if(0 != data.code) { // 返回0代表成功，其他失败
						toastr.error("code: " + data.code + " message: " + data.message);
					} else {
						var str = "";
						data.data.list.forEach(function(value, index, array) {
							str += '<div class="grid-item">\
								<div class="thumbnail">\
								    <a href="/blog/album' + value.Albumid + '.html"><img src="' + value.Url + '" alt="' + value.Des + '" /></a>\
									<div class="caption">\
										<h3>&middot;' + value.Albumname + '</h3>\
										<p>' + value.Des + '</p>\
										<p>\
											<i class="fa fa-heart-o" aria-hidden="true"></i>\
										</p>\
									</div></div></div>';
						});
						$('#all_photos').html(str);
					}
				}
			}).then(function() {
				var $container_1 = $('.masonry-container-1');
				$container_1.imagesLoaded(function() {
					$container_1.masonry({
						columnWidth: '.grid-item',
						itemSelector: '.grid-item'
					});
				});
			});
			$(this).tab('show'); //显示当前选中的链接及关联的content
		});

	})(jQuery);