
import Swiper from 'swiper';
import $ from 'jquery'
import 'bootstrap/js/src/tab'


class SavePopup {
    constructor() {
      if (document.querySelector(".js-custom-popups")){
       
        this.init();
      }
    }
 
    init() {
        $(document).ready(function(){
            var swiperStyle;
            var neckText,sleeveText,lengthText;
            neckText = sleeveText = lengthText = "As shown";
  
            $('.neckline').children('.style-contain').find('.img-container').click(function(){
                neckText = $(this).children(".img-txt").text()
                console.log(neckText)
            })
            $('.sleeve').children('.style-contain').find('.img-container').click(function(){
                sleeveText = $(this).children(".img-txt").text()
                console.log(sleeveText)
        
            })
            $('.length').children('.style-contain').find('.img-container').click(function(){
                lengthText = $(this).children(".img-txt").text()
                console.log(lengthText)
        
            })
        
    
            var imageSource = $('.js-style-img').attr('src');
            $('.style-check').on('click',function(){
                imageSource = $(this).attr('data-src');
                    // alert(imageSource)
                $('.js-style-img').attr('src',imageSource)
                var $styleLen = $(this).parents('.style-model-content').index();
                $('.saved-styles__subImages').find('.dyanamic-img-data').eq($styleLen).addClass('active');
            })
        
            //2nd popup save styles
            $('.js-save-style-item').on('click', function() {
    
                var index = $(".slide-item").length;
                const newdata = '<li class="slide-item"><div class="card-wrp"><div class="close-card" ><span></span><span></span></div><input id="img'+ index +'" type="radio" name="img-check" class="d-none img-check"/><div class="check-circle"><span></span></div><label for="img'+ index +'" class="style-card"><img class="saved-img" src="'+ imageSource+'" alt="style image" /></div><div class="d-flex pt-2 align-items-center  " ><p class="fnt-11 w-100 pr-2 text-left">'+neckText+" , "+sleeveText+" , "+lengthText+'</p><i class="share-icon icon-share mr-2" ></i></label></div></li>'
                $(this).addClass("procced-save-style-transiton")
                $('.saved-styles__subImages').addClass("save-item-transition")
                $('.custom-modal-head__opt').addClass("mbl-height")
                $('.save-item-btns').addClass("save-btn-transition")
                $('.saved-styles__subImages').append(newdata);
        
                // setTimeout(function(){ 
                    
                //     $('.save-style-model').modal('show');
                //     }, 650);
            
            });
            
            $(".create-more-styles").on("click",function(){
                $('.saved-styles__subImages').removeClass("save-item-transition")
                $('.save-item-btns').removeClass("save-btn-transition")
                $(".js-save-style-item").removeClass("procced-save-style-transiton")
                $('.custom-modal-head__opt').removeClass("mbl-height")

            })
            
           $(document).on("click",".close-card" ,function(){
                $(this).parents(".slide-item").remove();
           })

        
            if(window.innerWidth > 767){
                $(".style-model-content").removeClass("fade")
                
            }
            else{
                $(".style-model-content").addClass("fade")
                
            }
            
            var mySwiper1 = new Swiper('.js-prod-v2-neck', {
                speed: 400,
                // spaceBetween: 100,
                slidesPerView:'auto',
                navigation: {
                    nextEl: '.left-arrow-necklineSLider-v2',
                    prevEl: '.right-arrow-necklineSLider-v2',
                  },
            });
            var mySwiper2 = new Swiper('.js-prod-v2-sleev', {
                speed: 400,
                // spaceBetween: 100,
                slidesPerView:'auto',
                navigation: {
                    nextEl: '.left-arrow-sleeveSLider-v2',
                    prevEl: '.right-arrow-sleeveSLider-v2',
                  },
            });
            var mySwiper3 = new Swiper('.js-prod-v2-length', {
                speed: 400,
                // spaceBetween: 100,
                slidesPerView:'auto',
                navigation: {
                    nextEl: '.left-arrowlengthSLider-v2',
                    prevEl: '.right-arrowlengthSLider-v2',
                  },
            });

            $('.js-product-customization').click(function(){
                setTimeout(function(){
                    mySwiper1.update();
                    mySwiper2.update();
                    mySwiper3.update();
                },300)
            })
    })
    }
}

export default SavePopup;