import $ from 'jquery';

$(document).ready(function(){
    $('.acc-orders__progressbar').each(function(){
        var progress = $(this).attr('data-value') + '%';
        $(this).find('.status').outerWidth(progress);
    });
})