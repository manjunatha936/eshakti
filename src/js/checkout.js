import 'bootstrap/js/src/collapse';
import $ from 'jquery';
import 'parsleyjs'
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

        if(($(this).scrollTop() + topVal + $('.checkout-panel').outerHeight()) > ($('.cart-content__wrap').offset().top + $('.cart-content__wrap').outerHeight()) || ($(this).scrollTop() + $(this).outerHeight()) > ($('.checkout-content__section').offset().top + $('.checkout-content__section').outerHeight())) {
            $('.checkout-panel').addClass('stick-bottom');
        }

        else {
            $('.checkout-panel').removeClass('stick-bottom');
        }
        

        // if(($('.checkout-panel').offset().top + $('.checkout-panel').outerHeight())> ($('.checkout-content__section').offset().top + $('.checkout-content__section').outerHeight())) {
        //     $('.checkout-panel').addClass('stick-bottom');
        // }
        // else {
        //     $('.checkout-panel').removeClass('stick-bottom');
        // }

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

});
