$(document).ready(function() {

	// load edit_article window
	$("body").append('<!-- Modal -->\
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog">\
		<div class="modal-body">\
			<div id="toedit"></div>\
		</div>\
		<div class="modal-footer">\
			<button class="btn btn-warning" type="button" data-dismiss="modal">关闭</button>\
		</div>\
	</div>');
	
	$('#myModal').on('hidden.bs.modal', function (e) {
		setTimeout(function(){
			document.refresh();
		}, 1000);
	    
	});
});

function edit_article(id) {
	// document.documentElement.clientHeight 可见区域高度 
	var height = document.documentElement.clientHeight * 0.93;
	$('#toedit').html('<iframe width="100%" height="' + height + '" frameborder="0" src="/article/editmarkdown?id=' + id + '"></iframe>');
	$('#myModal').modal('show');
}