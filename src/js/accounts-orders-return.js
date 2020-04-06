import $ from 'jquery';
import "bootstrap/js/src/modal";
import 'parsleyjs';


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

    $('.order-content__check input[type="checkbox"]').on('change', function(){
        $(this).parents('.acc-orders__cardbox').find('.order-content__returnbox').slideToggle().addClass("js-return-validate");
    });

    $(".js-return-modal").click(function(){
        $("#return-popup").modal("show")
    });

    $('.js-return-form .js-return-submit').on('click', function () {
        console.log("in");
        $('.js-return-form .js-return-validate :input:not(:button), .js-return-form .js-return-validate select').each(function (index, value) { 
            $(this).parsley().validate();
          });
    });
})