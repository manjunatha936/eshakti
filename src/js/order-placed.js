import $ from 'jquery';

$(document).on('click', '.cart-content__details .cart-size a:not(.active)', function(e) {
    e.preventDefault();
    var el = $('.cart-content__details .custom-size'),
        curHeight = el.height(),
        autoHeight = el.css('height', 'auto').height();
    el.height(curHeight).animate({height: autoHeight}, 300);
    $(this).addClass('active').text('Show less');
});

$(document).on('click', '.cart-content__details .cart-size a.active', function(e) {
    e.preventDefault();
    var el = $('.cart-content__details .custom-size');
    el.animate({height: "36px"}, 300);
    $(this).removeClass('active').text('Show more');
});