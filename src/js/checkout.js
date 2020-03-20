import 'bootstrap/js/src/collapse';
import $ from 'jquery';
import 'parsleyjs';
import './components/cardvalidate';

$(document).ready(function(){
    $('.suggest-content__cancel').on('click', function(e){
        e.preventDefault();
        $(this).parents('.cart-panel__suggest').find('textarea').val('');
        $(this).parents('.cart-panel__suggest').find('.collapse').collapse('hide');
    });

    $('.checkout-panel__promo input[type="text"]').on('focus input', function(){
        if($(this).val() == "") {
            $(this).siblings('.checkout-panel__couponwrap').addClass('show-box');
            if($(this).parents('.checkout-panel__promo').find('.overlay').length <= 0) {
                $(this).parents('.checkout-panel__promo').append("<div class='overlay'></div>");
            }
        }
        else {
            $(this).siblings('.checkout-panel__couponwrap').removeClass('show-box');
            $('.checkout-panel__promo .overlay').remove();
        }
    });

    $(document).on('click', '.checkout-panel__promo .overlay', function(){
        $('.checkout-panel__couponwrap').removeClass('show-box');
        $('.checkout-panel__promo .overlay').remove();
    });

    $(window).on('scroll', function() {
        if(($(this).scrollTop() + $('header').outerHeight() + 15) > $('.checkout-content').offset().top) {
            $('.checkout-panel').addClass('sticky');
        }
        else {
            $('.checkout-panel').removeClass('sticky');
        }

        var topVal = parseInt($('.checkout-panel').css('top').replace('px', ''));

        if(($(this).scrollTop() + topVal + $('.checkout-panel').outerHeight()) > ($('.cart-content__wrap').offset().top + $('.cart-content__wrap').outerHeight()) && ($(this).scrollTop() + $(this).outerHeight()) > ($('.cart-content__wrap').offset().top + $('.cart-content__wrap').outerHeight())) {
            $('.checkout-panel').addClass('stick-bottom');
        }

        else {
            $('.checkout-panel').removeClass('stick-bottom');
        }
    });

    $('.checkout-panel__couponwrap input').change(function(){
        var coupVal = $(this).val();
        if ($(this).is(':checked')) {
            var coupPrice = $(this).attr('data-price');
            var coupType = $(this).attr('data-type');
            if(coupType == 'Gift Coupon') {
                $('.checkout-panel__coupontags span[data-type="Gift Coupon"]').remove();
            }
            $('.checkout-panel__coupontags').append('<span data-val="'+coupVal+'" data-type="'+coupType+'"> '+ coupVal + ' - ' + coupPrice + ' ('+ coupType +') ' + '<i>&times;</i></span>');
        }
        else {
            $('.checkout-panel__coupontags span[data-val=' + coupVal +']').remove();
        }
    });

    $(document).on('click', '.checkout-panel__coupontags span i', function(){
        $(this).parents('span').remove();
        var spanVal = $(this).parents('span').attr('data-val');
        $("input[value=" + spanVal +"]").prop("checked",false);
    });
    $(".address-checkbox").on("click",function(){
        if($(this).is(":not(:checked)")){
            $(this).parent(".label-container").siblings(".change-address-form").css("display","block")
        }
        else{
            $(this).parent(".label-container").siblings(".change-address-form").css("display","none")

        }
    })
    $(".select-btn").change(function(){
        $(this).siblings(".select-input").val($(this).val())
    })
    $('.form-address .address-btn').on('click', function () {
        $('.form-address').parsley().validate();  
    });

    $(".payment-form input[type='submit']").on('click', function () {
        $(this).parents('form').parsley().validate();  
    });

});
