
import Swiper from 'swiper';
// import $ from 'jquery'

var swiper = new Swiper('.js-wishlist-slider', {
    init: false,
    slidesPerView: 4,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    loop: false,
    navigation: {
        nextEl: '.left-arrow',
        prevEl: '.right-arrow',
    }
});