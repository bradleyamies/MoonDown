$('.btn-expand-collapse').click(function(e) {
	$('.navbar-side').toggleClass('collapsed');
	$('.fa-chevron-right').toggleClass('rotate');
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

