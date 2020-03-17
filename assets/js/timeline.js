function work_exp() {
    var elem = $('#timeline').children().first();
    var offset = $(elem).height() / 2;
    $(elem).css("margin-top", -offset);
    $(elem).parent().css("margin-top", offset);
    $('#timeline').height($('#timeline').height() - $(elem).height() - 16);
    $('.work-exp.aside').css("margin-top", $(elem).height() / 2);

    var year = $('.year .my_big_tag');
    var year_height = $(year).height();
    $(year).each(function() {
        $(this).css("margin-top", $(this).parent().parent().height() / 2 - year_height / 2 - 8);
    });

    var badge = $('.timeline-badge');
    $(badge).each(function() {
        $(this).css("margin-top", $(this).parent().height() / 2);
    });
}

$(document).ready(work_exp);