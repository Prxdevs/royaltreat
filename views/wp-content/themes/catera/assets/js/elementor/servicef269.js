(function($){"use strict";$(window).on('elementor/frontend/init',()=>{elementorFrontend.hooks.addAction('frontend/element_ready/catera-service.default',($element)=>{let addHandler=$('.catera-swiper',$element);if(addHandler.length>0){elementorFrontend.elementsHandler.addHandler(cateraSwiperBase,{$element,});}});});})(jQuery);