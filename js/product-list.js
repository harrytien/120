//商品列表
$(function () {
	var $mark = $('<div id="dropdown-mark" class="dropdown-mark"></div>');
	var $body = $('body');
	var $dropdowns = $('.dropdown-wrap > div');
	var evtClose = $.Callbacks();

	$mark.on('click', function () {
		$mark.hide();
		$dropdowns.hide();
	})

	$body.append($mark);

	$('.filter-bar').on('click', 'a[target-id]', function () {
		var $btn = $(this);
		var id = $btn.attr('target-id');
		var $dropdown = $('#' + id);
		$dropdown.show();
		$mark.show();
	})
});