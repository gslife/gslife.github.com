$(document).ready(function() {

	$('.shuffle').randomImage({path: 'img/'});
	$('a:first').click(function() {
		location.reload();
		return false;
	});

});
