
import Swiper from 'swiper';
// import $ from 'jquery'

var wishlistSlider = new Swiper('.js-wishlist-slider', {
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
console.log(wishlistSlider);