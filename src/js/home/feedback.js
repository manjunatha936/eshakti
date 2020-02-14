/*eslint-disable*/
import Swiper from 'swiper';

class FeedbackSwiper {
  constructor() {
    if (document.querySelector(".js-homefeed-slider")){
      this.feedslider();
    }
  }

  feedslider() {
    const feedbackSwiper = new Swiper(".js-homefeed-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
    });
  }
}

export default FeedbackSwiper;