import $ from 'jquery';
import "bootstrap/js/src/modal";
import 'parsleyjs';


$(document).ready(function () {
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

    $('.order-content__check input[type="checkbox"]').on('change', function () {
        $(this).parents('.acc-orders__cardbox').find('.order-content__returnbox').slideToggle().addClass("js-return-validate");
    });

    $(".js-return-modal").click(function () {
        $("#return-popup").modal("show")
    });

    $('.js-return-form .js-return-submit').on('click', function () {
        $(".js-return-form").parsley();
        $('.js-return-form .js-return-validate :input:not(:button), .js-return-form :input[name="product-item"]').each(function (index, value) {
            $(this).parsley().validate();
        });
    });
})