// https://github.com/gijsroge/tilt.js?tab=readme-ov-file

(function ($) {

    "use strict";

    $(".ballot").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 300,
        glare: true,
        maxGlare: 0.2,
        scale: 0.9,
        reset: false
    }).on('tilt.mouseEnter', function() {
        // Remove initial tilt when tilt.js takes over
        $(this).css('transform','');
        $(this).removeClass('meander'); // The animation interferes with tilt.js' interaction with the user.
    });
}(jQuery));
