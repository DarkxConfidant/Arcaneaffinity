/*on scroll apply class ani on animation*/
var $animation_elements = $('.animation');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    //var window_bottom_position = (window_top_position + window_height);
    var window_bottom_position = window_top_position + (window_height - 60);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('ani');
        } else {
            //$element.removeClass('ani');
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// copyright
$(document).ready(function ($) {
    let year = new Date().getFullYear();
    $('#copyright').text(year);
});


$('.instant-slide').owlCarousel({
    loop: true,
    margin: 25,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1.75
        },
        1000: {
            items: 2
        },
        1280: {
            items: 2.85
        }
    }
})


$('.sample-slider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 2.75
        },
        768: {
            items: 3.5
        },
        1000: {
            items: 3.75
        },
        1280: {
            items: 4.25
        }
    }
})


$('.slideAutoLeft').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2.75
        },
        768: {
            items: 3.5
        },
        1000: {
            items: 4.25
        },
        1440: {
            items: 6.25
        }
    }
})

$('.slideAutoRight').owlCarousel({
    loop: true,
    rtl: true,
    margin: 20,
    autoplay: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2.75
        },
        768: {
            items: 3.5
        },
        1000: {
            items: 4.25
        },
        1440: {
            items: 6.25
        }
    }
})

$('.whoweare-slide').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    items: 1,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000
})

$('.product-slide').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    items: 1,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000
})


$(document).on("click", ".navbar-toggler", function () {
    $("body").toggleClass("show_menu")
})

