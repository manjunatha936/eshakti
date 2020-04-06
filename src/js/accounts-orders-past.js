import $ from 'jquery';

$(document).ready(function(){
    $(document).on('click', '.order-content__details .cart-size a:not(.active)', function(e) {
        e.preventDefault();
        var el = $('.order-content__details .custom-size'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).animate({height: autoHeight}, 300);
        $(this).addClass('active').text('Show less');
    });
    
    $(document).on('click', '.order-content__details .cart-size a.active', function(e) {
        e.preventDefault();
        var el = $('.order-content__details .custom-size');
        el.animate({height: "36px"}, 300);
        $(this).removeClass('active').text('Show more');
    });
})