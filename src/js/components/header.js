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
        var title = "<li><a href='javascript:void(0)' class='border-0 d-lg-none'>My Account</a></li>";
        var ulClone = $('.account-menu').find("ul").clone().addClass("account-info d-lg-none");
        $('.web-header__menulinks').append(title, ulClone);
      }

      //Offer-card-swiper
      var swiper = new Swiper('.js-offer-card-swiper', {
        slidesPerView: 1.3,
        spaceBetween: 15,
        slidesOffsetBefore: 15,
        breakpoints: {
          992: {
            slidesOffsetBefore: 0,
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      });

      $('.offer-bar__toggle').click(function () {
        $(".offer-bar-c").parent(".offer-bar").toggleClass('show');
      });

    var data_breaks = $('.web-header__menulinks').attr('data-breaks').split(',');
    var break_count = 0;
    for (var i = 0; i < data_breaks.length - 1; i++) {
      var break_val = parseInt(data_breaks[i]);
      break_count = break_count + break_val;
      $(".web-header__menulinks > li:nth-of-type(" + (break_count + i) + ")").after("<li class='seperator'></li>");
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