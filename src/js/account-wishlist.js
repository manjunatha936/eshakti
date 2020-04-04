
import Swiper from 'swiper';
// import $ from 'jquery'

var wishlistSlider = new Swiper('.js-wishlist-slider', {
    loop: false,
    preventClicks: true,
    grabCursor: true,
    slidesPerView: 1.2,
    simulateTouch: false,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    grabCursor: false,
    loop: false,
    watchOverflow: true,
    navigation: {
        nextEl: '.left-arrow',
        prevEl: '.right-arrow',
    },
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

//Product Recent-items slider
import RecentlyViewed from './product-details/recent-item-slider'
const recentlyViewed = new RecentlyViewed();