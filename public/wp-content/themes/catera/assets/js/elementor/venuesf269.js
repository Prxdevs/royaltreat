(function($){"use strict";$(window).on('elementor/frontend/init',()=>{elementorFrontend.hooks.addAction('frontend/element_ready/royaltreatt-venues.default',($element)=>{let addHandler=$('.royaltreatt-swiper',$element);if(addHandler.length>0){elementorFrontend.elementsHandler.addHandler(royaltreattSwiperBase,{$element,});}});});})(jQuery);