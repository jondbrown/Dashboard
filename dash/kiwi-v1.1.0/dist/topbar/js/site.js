!function(t,e,n){"use strict";n.extend(t.site,{init:function(){void 0!==site.menubar&&(site.menubar.init(),n(e).on("click",".hamburger",function(t){n(this).toggleClass("is-active")}),n(e).on("click",'[data-toggle="menubar"]',function(t){site.menubar.toggle(),t.preventDefault()}),n(e).on("click",".submenu-toggle",function(t){site.menubar.menu.toggleOnClick(n(this)),t.preventDefault()}),n(e).on("click",'[data-toggle="collapse"]',function(t){var e=n(t.target);e.is('[data-toggle="collapse"]')||(e=e.parents('[data-toggle="collapse"]')),"site-navbar-collapse"===n(e.attr("data-target")).attr("id")&&n("body").toggleClass("navbar-collapse-in"),t.preventDefault()}),Breakpoints.on("change",function(){site.menubar.change(),n('[data-toggle="menubar"]').toggleClass("is-active",site.menubar.opened)})),!/xs|sm|md/.test(Breakpoints.current().name)&&n(".scroll-container").perfectScrollbar(),this.initPlugins()}})}(window,document,jQuery),$(function(){site.init()});