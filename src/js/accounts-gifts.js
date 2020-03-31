import $ from 'jquery';

$(".js-gift-card").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#scroll-target").position().top
    },1000);
});

$(".js-copy-code").click(function () {
    var element = $(this).parents(".coupon-box").find("p");
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  });

  