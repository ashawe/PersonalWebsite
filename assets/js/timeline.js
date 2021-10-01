function getAvgElementHeight() {
    var height = 0;
    var n = 0;
    $('#timeline').children().each(function() {
        height += $(this).height();
        n++;
    });
    return height / n;
}

function getAdjustment() {
    return $('.timeline-movement').css("margin-bottom").replace(/[^-\d\.]/g, '');
}

function work_exp() {
    var firstElem = $('#timeline').children().first();
    var firstElemHeight = $(firstElem).height();
    var avgElementHeight = getAvgElementHeight();
    $(firstElem).css("margin-top", -firstElemHeight / 2);
    $(firstElem).parent().css("margin-top", firstElemHeight / 2);
    $('#timeline').height($('#timeline').height() - avgElementHeight / 2 - getAdjustment());
    $('.work-exp.aside').css("margin-top", avgElementHeight / 2);

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

function getTimelineHeight(is_total) {
    var height = 0;
    $('.timeline-movement').each(function() {
        if (!$(this).hasClass('hidden-work-exp') || is_total)
            height += $(this).height();
    });
    return height - 68;
}

$(document).ready(work_exp);