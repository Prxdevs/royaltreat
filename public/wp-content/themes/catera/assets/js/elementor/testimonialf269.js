(function($){"use strict";$(window).on('elementor/frontend/init',()=>{const addHandler=($element)=>{elementorFrontend.elementsHandler.addHandler(cateraSwiperBase,{$element,});$element.on("swiperInit",function(e,slider){if($('.elementor-custom-swiper-pagination').length>0){var thumbs=new Swiper('.elementor-custom-swiper-pagination',{slidesPerView:3,spaceBetween:30,centeredSlides:true,loop:true,slideToClickedSlide:true,breakpoints:{320:{slidesPerView:3,spaceBetween:10},},});slider.controller.control=thumbs;thumbs.controller.control=slider;}});};elementorFrontend.hooks.addAction('frontend/element_ready/catera-testimonials.default',addHandler);});})(jQuery);