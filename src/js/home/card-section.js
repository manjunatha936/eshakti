/*eslint-disable*/
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
        loop: true,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
        },
    });
  }
}

export default CardSwiper;