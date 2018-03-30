! function(window, document, $) {
	"use strict";
	var $body     = $(document.body);
	var $menubar  = $('.site-menubar');

	/*
	* menubar module
	*/
	site.menubar = {
		top: true,
		opened: false,
		init: function() {
			this.change();
		},
		hide: function() {
			$body.removeClass('menubar-open'), this.opened = false;
		},
		open: function() {
			$body.addClass('menubar-open'), this.opened = true;
		},
		toggle: function() {
			this.opened === true ? this.hide() : this.open();
		},
		change: function() {
			if (/xs|sm|md/.test(Breakpoints.current().name)) {
				this.switchLeft();
			} else {
				this.switchTop();
			}
		},
		switchLeft: function() {
			this.top === true && $body.removeClass('menubar-top').addClass('menubar-left'), this.top = false;
		},
		switchTop: function() {
			this.top === false && $body.removeClass('menubar-left').addClass('menubar-top'), this.top = true;
		},
		menu: {
			slideSpeed: 500,
			toggleOnClick: function($toggle) {
				/xs|sm|md/.test(Breakpoints.current().name) &&
				$toggle.parent().toggleClass('open').find('> .submenu')
					.slideToggle(this.slideSpeed).end().siblings()
					.removeClass('open').find('> .submenu')
					.slideUp(this.slideSpeed);
			}
		}
	};
}(window, document, jQuery);
