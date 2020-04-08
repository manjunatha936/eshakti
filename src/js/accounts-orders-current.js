import $ from 'jquery';

$(document).ready(function(){
    $('.acc-orders__progressbar').each(function(){
        var progress = $(this).attr('data-value') + '%';
        $(this).find('.status').outerWidth(progress);
    });

    function showmoreDisplay() {
        $('.order-content__details .cart-style-custom, .order-content__details .custom-size').each(function(){
            var el = $(this),
                autoHeight = el.css('height', 'auto').height();
            el.removeAttr('style');
            if(autoHeight <= 36) {
                el.parent().addClass('no-showmore');
            }
            else {
                el.parent().removeClass('no-showmore');
            }
        });
    }
    showmoreDisplay();
    $(window).on('load resize', function() {
        showmoreDisplay();
    });


    $(document).on('click', '.order-content__details .cart-size a:not(.active)', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-size').find('.custom-size'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).animate({height: autoHeight}, 300);
        $(this).addClass('active').text('Show less');
    });
    
    $(document).on('click', '.order-content__details .cart-size a.active', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-size').find('.custom-size');
        el.animate({height: "36px"}, 300);
        $(this).removeClass('active').text('Show more');
    });

    $(document).on('click', '.order-content__details .cart-style a:not(.active)', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-style').find('.cart-style-custom'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).animate({height: autoHeight}, 300);
        $(this).addClass('active').text('Show less');
    });
    
    $(document).on('click', '.order-content__details .cart-style a.active', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-style').find('.cart-style-custom');
        el.animate({height: "36px"}, 300);
        $(this).removeClass('active').text('Show more');
    });
})