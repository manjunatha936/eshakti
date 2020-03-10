/*eslint-disable*/
import $ from "jquery"
import "bootstrap/js/src/modal";
class HeaderInteractions {
  constructor() {
    if (document.querySelector(".web-header")){
      this.init();
    }
  }

  init() {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
          $('header').addClass("sticky");
        }
        else {
          $('header').removeClass("sticky");
        }
    });

    $(window).on('load resize', function () {
      var discountht = $('.discount-bar').outerHeight();
      $('.web-header').css('top', discountht);
  });

    var data_breaks = $('.web-header__menulinks').attr('data-breaks').split(',');
    var break_count = 0;
    for(var i=0;i<data_breaks.length-1;i++) {
        var break_val = parseInt(data_breaks[i]);
        break_count = break_count + break_val;
        $(".web-header__menulinks > li:nth-of-type(" + (break_count + i) + ")").after("<li class='seperator'></li>");
    }

    $(document).on('click', '.web-header__search:not(.search-open)', function(){
      $(this).addClass('search-open');
      $(this).parent().append("<div class='overlay'></div>")
    });

    $(document).on('click', '.web-header__top .overlay', function(){
      $('.web-header__search').removeClass('search-open');
      $(this).remove();
    });

    $('header .dropdown-menulink').on('mouseover', function(){
      $('header').addClass('menu-hover');
    });
    $('header .dropdown-menulink').on('mouseleave', function(){
      $('header').removeClass('menu-hover');
    });
  }
}

export default HeaderInteractions;