/*eslint-disable*/
import $ from "jquery"
import "bootstrap/js/src/modal";
import 'parsleyjs';
import Swiper from 'swiper';
class HeaderInteractions {
  constructor() {
    if (document.querySelector(".web-header")) {
      this.init();
    }
  }

  init() {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1) {
        // console.log($(this).scrollTop())
        $('header').addClass("sticky");
      }
      else {
        $('header').removeClass("sticky");
      }
    });

    $(window).on('load resize', function () {
      if($('.offer-bar').length > 0) {
        var discountht = $('.offer-bar').outerHeight();
        $('.web-header').css('top', discountht);
      }
      if($('.discount-bar').length > 0) {
        var discountht = $('.discount-bar').outerHeight();
        $('.web-header').css('top', discountht).addClass('normal-cust-header');
      }
    });

    //Hamburger functions
      $('.hamburger-menu').click(function () {
        $('.web-header__bottom').addClass('show');
      });

      $('.web-header__bottom .close').click(function () {
        $('.web-header__bottom').removeClass('show');
      });

      $('.dropdown-menulink').click(function () {
        $(this).toggleClass('show-menu');
      });

      if ($(".account-menu").hasClass("not-logged")) {
        var accountClones = $('.account-menu').clone().addClass("d-lg-none");
        $('.web-header__bottom').prepend(accountClones);
      }

      else if ($(".account-menu").hasClass("logged")) {
        var title = "<li><a href='javascript:void(0)' class='border-0 d-lg-none account-title'>My Account</a></li>";
        var ulClone = $('.account-menu').find("ul").clone().addClass("account-info d-lg-none");
        $('.web-header__bottom').append(title,ulClone);
      }

      //Offer-card-swiper
      if($('.js-offer-card-swiper')) {
        var swiper = new Swiper('.js-offer-card-swiper', {
          slidesPerView: 1.2,
          spaceBetween: 15,
          slidesOffsetBefore: 15,
          slidesOffsetAfter: 20,
          breakpoints: {
            375: {
              slidesPerView: 1.3,
            },
            500: {
              slidesPerView: 1.7,
            },
            700: {
              slidesPerView: 1.9,
            },
            700: {
              slidesPerView: 2,
            },
            1024: {
              slidesOffsetAfter: 0,
              slidesOffsetBefore: 0,
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesOffsetBefore: 0,
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }
        });
      }

      $('.offer-bar__toggle').click(function () {
        $(".offer-bar-c").parent(".offer-bar").toggleClass('show');
      });

      // copy link js
      $(".copy-code").click(function () {
        e.preventDefault();
        var element = $(this).parents(".offer-bar-card").find(".code");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
      });

    if($('.web-header__menulinks').length > 0) {
      var data_breaks = $('.web-header__menulinks').attr('data-breaks').split(',');
      var break_count = 0;
      for (var i = 0; i < data_breaks.length - 1; i++) {
        var break_val = parseInt(data_breaks[i]);
        break_count = break_count + break_val;
        $(".web-header__menulinks > li:nth-of-type(" + (break_count + i) + ")").after("<li class='seperator'></li>");
      }
    }

    $(document).on('click', '.web-header__search:not(.search-open)', function () {
      $(this).addClass('search-open');
      $(this).parent().append("<div class='overlay'></div>")
    });

    $(document).on('click', '.web-header__top .overlay', function () {
      $('.web-header__search').removeClass('search-open');
      $(this).remove();
    });

    $(document).on('click', '.web-header__search .close-search', function () {
      $('.web-header__search').removeClass('search-open');
      $('.web-header__top .overlay').remove();
    });

    $('header .dropdown-menulink').on('mouseover', function () {
      $('header').addClass('menu-hover');
    });
    $('header .dropdown-menulink').on('mouseleave', function () {
      $('header').removeClass('menu-hover');
    });

    $('.video-popup').on('shown.bs.modal', function () {
      $(this).find('iframe').attr('src', "");
      $(this).find('iframe').attr('src', ($(this).find('iframe').attr('data-src')));
    });

    $('.video-popup').on('hidden.bs.modal', function () {
      $(this).find('iframe').attr('src', "");
    })
  }
}

export default HeaderInteractions;