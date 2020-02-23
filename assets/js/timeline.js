$( document ).ready(function() {
    var elem = $('#timeline').children().first();
    var offset = $(elem).height()/2;
    $(elem).css("margin-top",-offset);
    $('#timeline_row').css("margin-top",offset);
    $('#timeline_row').css("margin-bottom",offset);

    var year = $('.timeline-item-right');
    $(year).each(function(){
        $(this).css("margin-top",offset-$(year).children().first().height()-8);        
    });

    year = $('.timeline-item-year');
    $(year).each(function(){
        $(this).css("margin-top",offset-$(year).children().first().height()-8);
    });
    

    var badge = $('.timeline-badge');
    $(badge).each(function(){
        $(this).css("margin-top",offset-$(year).children().first().height()+16);
    });

    var h = $('#timeline').height();
    $('#timeline').height( h - offset - 16);

});