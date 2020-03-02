
import Swiper from 'swiper';
import $ from 'jquery'


class ProductDetais {
    constructor() {
      if (document.querySelector(".product-details")){
       
        this.init();
      }
    }
  
    init() {
     $(document).ready(function(){
      
       var imageSource = $('.js-style-img').attr('src');
        $('.style-check').on('click',function(){
                 imageSource = $(this).attr('data-src')
                alert(imageSource)
            $('.js-style-img').attr('src',imageSource)
        })
        //thumbs
        var galleryThumbs = new Swiper('.js-slider-img', {
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        
        var galleryTop = new Swiper('.js-slider-thumb', {
            spaceBetween: 10,
            slidesPerView: 4,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: galleryThumbs
            }
          });


          //

          var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4.5,
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            
            thumbs: {
              swiper: galleryThumbs,
            },
          });
        //save style
        $(".js-btn-save").click(function(e){
            // e.preventDefault();
            if($(".savedItem").css("display","none")){
                $(".savedItem").css({display:"block"})
            }
            const ele = '<li class="slide-item swiper-slide"><div class="style-card"><img class="saved-img" src="'+imageSource+'" alt="" /></div><div class="d-flex pt-2 align-items-center  " ><p class="fnt-11 w-100 pr-2">As shown</p><img class="share-icon mr-2" src="./assets/images/share.svg" alt="" /></div></li>'
            // $('.slide-item-wrp').append(ele)
            // if($(".slide-item").length> 4){
                var swiperStyle = new Swiper('.js-style-slider', {
                    // loop: true,
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev',
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 20,
                    breakpoints: {
                        1920: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1028: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                });
                // }
      
                
                swiperStyle.appendSlide(ele);
        })


     })

    }
}

export default ProductDetais;