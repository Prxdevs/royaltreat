(function($){"use strict";$(window).on('elementor/frontend/init',()=>{elementorFrontend.hooks.addAction('frontend/element_ready/royaltreatt-service.default',($element)=>{let addHandler=$('.royaltreatt-swiper',$element);if(addHandler.length>0){elementorFrontend.elementsHandler.addHandler(royaltreattSwiperBase,{$element,});}});});})(jQuery);