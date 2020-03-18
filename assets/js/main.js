function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    // console.log(docViewTop);
    var docViewBottom = docViewTop + $(window).height();
    // console.log(docViewBottom);
    var elemTop = $(elem).offset().top;
    // console.log(elemTop);
    var elemBottom = elemTop + $(elem).height();
    // console.log(elemBottom);
    return elemTop <= docViewBottom * 0.90 && elemBottom >= docViewBottom * 0.90;
}

var prevSelected = "lorem";
$(document).ready(function() {
    var closed = true;
    $('#other-cert').fadeToggle('5000', 'swing');
    $('#view-all-cert').click(function() {
        $('#other-cert').fadeToggle('5000', 'swing');
        if (closed) {
            $('#view-all-cert').html("View Less");
            closed = false;
        } else {
            $('#view-all-cert').html("View All");
            closed = true;
        }

    });

});

$(window).scroll(function() {

    if ($(window).scrollTop() >= 500) {
        $('#go_up').fadeIn("fast");
    } else {
        $('#go_up').fadeOut("fast");
    }

    if ($(window).scrollTop() >= 50) {
        $(".header-nav").css("box-shadow", "0 0 8px rgba(0, 0, 0, 0.1)");
        $(".header-nav").css("padding", "8px 32px");
    } else {
        $(".header-nav").css("box-shadow", "none");
        $(".header-nav").css("padding", "16px 32px");
    }

    $('section').each(function() {
        // console.log('here1');
        var section_id = $(this).attr('id');
        // console.log(section_id);
        if (isScrolledIntoView(this)) {
            // console.log('here2');
            if (section_id != undefined) {
                $('a[href="#' + prevSelected + '"]').removeClass("active");
                $('a[href="#' + section_id + '"]').addClass("active");
                prevSelected = section_id;
            }
        }
    });
});