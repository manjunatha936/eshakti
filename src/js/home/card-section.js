/*eslint-disable*/
import $ from 'jquery';
import Swiper from 'swiper';

class CardSwiper {
  constructor() {
    if (document.querySelector(".js-homecard-slider")){
      this.cardslider();
    }
  }

  cardslider() {
    const cardSwiper = new Swiper(".js-homecard-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        touch: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
    });

    var screenArr = ["data-src", "data-lg-src", "data-md-src", "data-sm-src", "data-xs-src"];

    $(window).on("load resize", function(){
      var windowsize = $(this).outerWidth();
      if(windowsize < 576) {
        replaceImg('data-xs-src');
      }
      else if(windowsize < 1200 && windowsize >= 992) {
        replaceImg('data-lg-src');
      }
      else if(windowsize < 992 && windowsize >= 768) {
        replaceImg('data-md-src');
      }
      else if(windowsize < 768 && windowsize >= 576) {
        replaceImg('data-sm-src');
      }
      else {
        replaceImg('data-src');
      }

      function replaceImg (dataval) {
        $('.responsive-bgimage').each(function(){
          if(!$(this).attr(dataval)) {
            for(var i = (screenArr.indexOf(dataval) - 1);i>=0;i--) {
              var attr = $(this).attr(screenArr[i]);
              if(typeof attr !== typeof undefined && attr !== false) {
                $(this).css("background-image", "url(" + $(this).attr(screenArr[i]) + ")");
                break;
              }
            }
          }
          else {
            $(this).css("background-image", "url(" + $(this).attr(dataval) + ")");
          }
        });
      }
    });
  }
}

export default CardSwiper;