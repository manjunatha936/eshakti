
import Swiper from 'swiper';
// import $ from 'jquery'

var wishlistSlider = new Swiper('.js-wishlist-slider', {
    loop: false,
    preventClicks: true,
    grabCursor: true,
    slidesPerView: 4,
    simulateTouch: false,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    grabCursor: false,
    loop: false,
    navigation: {
        nextEl: '.left-arrow',
        prevEl: '.right-arrow',
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 4
        }
    }
});

$( '.js-wishlist-slider .swiper-slide').length
