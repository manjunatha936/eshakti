import Swiper from 'swiper';

class RecentlyViewed {
    constructor() {
      if (document.querySelector(".js-recently-viewed")){
        this.init();
      }
    }
  
    init() {
  
      // keep track of swiper instances to destroy later
      let mySwiper;

        mySwiper = new Swiper ('.js-recently-viewed', {
          loop: false,
          preventClicks: true,
          grabCursor: true,
          simulateTouch: false,
          observer: true,
          observeParents: true,
          grabCursor: false,
          watchOverflow: true,
          pagination: {
            el: '.our-team-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.left-arrow-img',
            prevEl: '.right-arrow-img',
          },
          // loop: true,
          spaceBetween:15,
          slidesPerView: 1,
          // Responsive breakpoints
          breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1.3,
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 1.3,
            },
            // when window width is >= 640px
            640: {
            slidesPerView: 1.5,
            },
            // when window width is >= 992px
            992: {
            slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
            slidesPerView: 4,
            }
        } 
        });
    }
}

export default RecentlyViewed;