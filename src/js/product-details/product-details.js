
import Swiper from 'swiper';
import $ from 'jquery'
import 'bootstrap/js/src/tab'


class ProductDetais {
    constructor() {
      if (document.querySelector(".product-details")){
       
        this.init();
      }
    }

    init() {
     $(document).ready(function(){
      var swiperStyle;
       var neckText,sleeveText,lengthText;
       neckText = sleeveText = lengthText = "As shown";
        $(".js-read-more").click(function(e){
          e.preventDefault()
          $(this).siblings('.more-info').toggle()
          
          if( $(this).siblings('.more-info').css('display') == 'block'){
            $(this).css({marginLeft:"0"})
          }else {
            $(this).css({marginLeft:"8px"})
          }
        })
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
      $('.close-parent-modal').on('click', function() {
        var index = $(".slide-item").length;
        const newdata = '<li class="slide-item"><div class="card-wrp"><div class="style-card"><img class="saved-img" src="'+ imageSource+'" alt="style image" /><div class="close-card" slide-id="'+ index +'"><span></span><span></span></div></div><div class="d-flex pt-2 align-items-center  " ><p class="fnt-11 w-100 pr-2 text-left">'+neckText+" , "+sleeveText+" , "+lengthText+'</p><i class="share-icon icon-share mr-2" ></i></div></div></li>'
        $('.saved-styles__subImages').append(newdata);

        setTimeout(function(){ 
          $('.save-style-model').modal('show');
          }, 650);
  
      });

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
            effect: 'fade',
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
            slidesPerView: 3.5,
            // loop: true,
            freeMode: true,
            // loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
              // Navigation arrows
          navigation: {
            nextEl: '.left-arrow',
            prevEl: '.right-arrow',
          },
    
            grabCursor: true,
            breakpoints: {
             
              360: {
                slidesPerView: 2.5,
         
              },
              768: {
                slidesPerView: 3.5,
             
              },
            }
            
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            effect: 'fade',
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            pagination: {
              el: '.swiper-pagination-bullets',
              clickable: true,
               
            },
        
            thumbs: {
              swiper: galleryThumbs,
            },
          });
        //save style
        $(".js-btn-save").click(function(e){
          var index = $(".slide-item").length
          
            // e.preventDefault();
            
            if($(".saveditem-container").css("display","none")){
                $(".saveditem-container").css({"display":"block"})
                $(".saved-btn").css({"display":"block"})
                $(".procced-btn").css({"display":"none"})

            }
            // let flag = lengthText.localeCompare(neckText.localeCompare(sleeveText))
            var cardTitle;
              if(neckText.localeCompare(sleeveText)){
                if(lengthText.localeCompare(sleeveText)){
                  cardTitle = neckText
                }
              }else{

              }
              cardTitle = neckText+","+sleeveText+","+lengthText;

            const ele = '<li class="slide-item swiper-slide"><div class="card-wrp"><div class="style-card"><img class="saved-img" src="'+imageSource+'" alt="style image" /><div class="close-card" slide-id="'+ index +'"><span></span><span></span></div></div><div class="d-flex pt-2 align-items-center  " ><p class="fnt-11 w-100 pr-2">'+cardTitle+'</p><i class="share-icon icon-share mr-2"  ></i></div></div></li>'
            // $('.slide-item-wrp').append(ele)
            // if($(".slide-item").length> 4){
                swiperStyle = new Swiper('.js-style-slider', {
                    // loop: true,
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    spaceBetween: 20,
                    breakpoints: {
                        480: {
                            spaceBetween: 10
                        },
                        992: {
                            spaceBetween: 20
                        },
                        1200: {
                            spaceBetween: 30
                        }
                    }
                });
                // }
      
                
                swiperStyle.appendSlide(ele);
        })


        $(document).on('click','.close-card',function(){
          var $parent = $(this).parents('.slide-item').remove();
          let slideIndex = parseInt($(this).attr("slide-id"))
          --slideIndex; 
          // console.log(slideIndex)
          // swiperStyle.removeSlide(slideIndex  );
          
          swiperStyle.update()
          let length = $('.slide-item').length
          let i=1;
         $('.close-card').each(function(){
           $(this).attr("slide-id",i++)

         })
     
         
        })
       
        if(window.innerWidth > 767){
          $(".style-model-content").removeClass("fade")
          
        }
        else{
          $(".style-model-content").addClass("fade")
          
        }
        // on hover change img
        $('.tab-img img').hover(function(){
         let src = $(this).attr("src")
        $(this).parent(".tab-img").siblings(".model-img-tab-container").css("background-image","url("+src+")")
        })
 
        $('.model-img-tab-container').on('mousemove', function(e) {
          console.log(e.offsetY)
          var zoomer = e.currentTarget;
          // e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
          e.offsetY ? e.offsetY = e.offsetY : e.offsetX = e.touches[0].pageX
          // x = offsetX/zoomer.offsetWidth*100
          let y = e.offsetY/zoomer.offsetHeight*100
          
          $(this).css({ 
                  'background-position-x' : 100 + '%',
                  'background-position-y' : y + '%' ,  
              })
        });

        $(".size-lbl").click(function(){
          $(".size-number").removeClass("size-active")
          if($(this).siblings("input").is(":checked")){
            $(this).parent(".size-number").addClass("size-active")
          }
        })
     })


    //Save style popup


    //Save style model
 var CreateMoreStyles = document.querySelector('.create-more-styles')
 CreateMoreStyles.addEventListener("click", function (event) {
  setTimeout(function(){ 
    $('.bd-example-modal-lg').modal('show');
    }, 650);
  });




    }
}

export default ProductDetais;