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

$(window).scroll(function() {

    if ($(window).scrollTop() >= 1000) {
        $('#go_up').fadeIn("fast");
    } else {
        $('#go_up').fadeOut("fast");
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