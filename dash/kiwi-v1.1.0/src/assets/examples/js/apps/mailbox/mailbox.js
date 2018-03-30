$(function() {
	$('.mail-item-star').on('click', function(e) {
		var $this = $(this);
		if ($this.hasClass('starred')) {
			$this.removeClass('starred'), $this.find('.zmdi').addClass('zmdi-star-outline').removeClass('zmdi-star');
		} else {
			$this.addClass('starred'), $this.find('.zmdi').addClass('zmdi-star').removeClass('zmdi-star-outline');
		}
		e.preventDefault();
	});
});