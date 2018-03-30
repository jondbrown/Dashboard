!function(window, document, $) { "use strict";
	var pluginDefaults = {
		owlCarousel: {
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem: !0,
			autoPlay: !1
		},
		switchry: {
			color: '#3F51B5',
			jackColor: '#ffffff',
			size: 'default'
		}
	};

	window.site = {
		initPlugins: function() {
			$(document).on('click', '[data-toggle="site-search"]', function(e) {
				$('.site-search').fadeToggle(600).find('.search-field').focus(), e.preventDefault();
			});

			$('[data-plugin]').each(function() {
				var $this = $(this);
				var plugin = $this.data('plugin');

				if (typeof $.fn[plugin] === 'function') {
					var defaults = pluginDefaults[plugin] || {};
					$.fn[plugin].call($this, $.extend({}, defaults, $this.data()));
				}
			});

			$('[data-toggle="class"]').each(function() {
				var $this = $(this);
				var target = $this.data('target') || $this.attr('href');
				var $target = $(target);
				var className = $this.data('class') || 'show';
				
				$this.on('click', function(e) {
					$target.toggleClass(className);
					e.preventDefault();
				});
			});

			$('[data-plugin="switchery"]').each(function() {
				var defaults = pluginDefaults['switchry'] || {};
				new Switchery(this, $.extend({}, defaults, $(this).data()));
			});

			$.fn.videoModal && $('[data-toggle="video-modal"]').videoModal();
			$('[data-toggle="tooltip"]').tooltip();
		}
	}, $.colors = {
		primary   : "#3F51B5",
		success   : "#4CAF50",
		info      : "#00BCD4",
		warning   : "#FF9800",
		danger    : "#F44336",
		white     : "#FFFFFF"
	};
}(window, document, jQuery);