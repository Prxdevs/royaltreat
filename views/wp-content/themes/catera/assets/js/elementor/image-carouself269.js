(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        const addHandler = ($element) => {
            elementorFrontend.elementsHandler.addHandler(royaltreattSwiperBase, {
                $element,
            })
        }
        elementorFrontend.hooks.addAction('frontend/element_ready/royaltreatt-image-carousel.default', addHandler);
    })
})(jQuery);
