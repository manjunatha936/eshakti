
import Swiper from 'swiper';
import $ from 'jquery'

// (function($) {
//     'use strict';
  
// var wishlistSlider;
    
// var wishlistSlider = new Swiper('.js-wishlist-slider', {
//     // init: false,
//     slidesPerView: 4,
//     simulateTouch: false,
//     spaceBetween: 0,
//     observer: true,
//     observeParents: true,
//     grabCursor: false,
//     loop: false,
//     navigation: {
//         nextEl: '.left-arrow',
//         prevEl: '.right-arrow',
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 2
//         },
//         992: {
//             slidesPerView: 4
//         }
//     }
//     })
// });

    // var wishlistSlider;

    // wishlistSlider = new Swiper('.js-wishlist-slider', {
    //     initialSlide: 0,
    //     loop: false,
    //     preventClicks: true,
    //     grabCursor: true,
    //     slidesPerView: 4,
    //     simulateTouch: false,
    //     spaceBetween: 0,
    //     observer: true,
    //     observeParents: true,
    //     grabCursor: false,
    //     loop: false,
    //     navigation: {
    //         nextEl: '.left-arrow',
    //         prevEl: '.right-arrow',
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2
    //         },
    //         992: {
    //             slidesPerView: 4
    //         }
    //     }

    // });

    // var wishlistSlider = wishlistSlider.slides.length - 2;

    // $('#total').html(wishlistSlider);

    // wishlistSlider.on('slideChangeEnd', function(instance) {

    //     var currentCount = (instance.activeIndex - 1) % (wishlistSlider) + 1;

    //     if(currentCount === 0) {
    //         $('#current').html(wishlistSlider);
    //     } else {
    //         $('#current').html(currentCount);
    //         console.log("hello");
    //     }
    //     alert("hello");
    // });