/*eslint-disable*/
import Swiper from 'swiper';

class BannerSwiper {
  constructor() {
    if (document.querySelector(".js-homebnr-slider")){
      this.bannerslider();
    }
  }

  bannerslider() {
    const bannerSwiper = new Swiper(".js-homebnr-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        }
    });
  }
}

export default BannerSwiper;