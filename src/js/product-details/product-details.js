
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


          var popupSlide1 = new Swiper('.js-necklineSLider', {
            // spaceBetween: 10,
            watchOverflow: true,
            slidesPerView: 'auto',
            navigation: {
              nextEl: '.left-arrow-necklineSLider',
              prevEl: '.right-arrow-necklineSLider',
            },
            
            
          });
          
          var popupSlide2 = new Swiper('.js-sleeveSLider', {
            spaceBetween: 10,
            slidesPerView:'auto',
            // loop: true,
            navigation: {
              nextEl: '.left-arrow-sleeveSLider',
              prevEl: '.right-arrow-sleeveSLider',
            },
            
            
          });
          var popupSlide3 = new Swiper('.js-lengthSLider', {
            spaceBetween: 10,
            slidesPerView:'auto',
            navigation: {
              nextEl: '.left-arrowlengthSLider',
              prevEl: '.right-arrowlengthSLider',
            },
          
            
          });
          $(".custom-stye-br").click(function(){
            setTimeout(function(){
              popupSlide1.update();
              popupSlide2.update();
              popupSlide3.update();
            },300);
          })

          $(document).on('click', '.product-modal .nav-link.style-head', function(){
            setTimeout(function(){
              popupSlide1.update();
              popupSlide2.update();
              popupSlide3.update();
            },300);
          });
          $(document).on('click', '.style-head', function(){
            setTimeout(function(){
              popupSlide1.update();
              popupSlide2.update();
              popupSlide3.update();
            },300);
          });
        //save style
        
        
        // $('.custom-product-model').on('shown.bs.modal', function() {
        //   // Get the right offset
         
        //   setTimeout(function(){
            
        //   },2000)
        //   console.log(topValue)
        // });
   
        $(".js-btn-save").click(function(e){
            $(this).addClass("btn-disable")
            setTimeout(function(){
              var topValue = $('.saveditem-container').position().top + 35;
              console.log(topValue);
              $('.scroll-container .os-viewport').animate({
                scrollTop: topValue
              }, 1500);
            })
  
            $(".js-proceed").addClass("btn-visible-true")
          
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

            const ele = '<li class="slide-item swiper-slide"><div class="card-wrp"><div class="close-card" slide-id="'+ index +'"><span></span><span></span></div><input id="img'+ index +'" type="radio" name="img-check" class="d-none img-check"/><div class="check-circle"><span></span></div><label for="img'+ index +'"  class="style-card"><img class="saved-img" src="'+imageSource+'" alt="style image" /></div><div class="d-flex pt-2 align-items-center  " ><p class="fnt-11 w-100 pr-2">'+cardTitle+'</p><div class="share"><i class="icon-share"></i><div class="tooltip-share"><div class="tooltip-share__item pinterest d-flex"><i class="icon-pinterest tip-icon"></i><p class="prd-sub-txt">Pinterest</p></div><div class="tooltip-share__item facebook d-flex"><i class="icon-facebook tip-icon"></i><p class="prd-sub-txt">Facebook</p></div><div class="tooltip-share__item twitter d-flex"><i class="icon-twitter tip-icon"></i><p class="prd-sub-txt">Twitter</p></div></div></div></label></div></li>'


                swiperStyle = new Swiper('.js-style-slider', {
                    // loop: true,
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    spaceBetween: 20,
                    breakpoints: {
                        480: {
                            spaceBetween: 10,
                            slidesPerView: 1,
                        },
                        
                        768: {
                            slidesPerView: 'auto',
                            spaceBetween: 20
                        },
                        992: {
                            slidesPerView: 'auto',
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
 
            // on hover change img
            $('.tab-img img').hover(function(){
              $('.tab-img img').css({border:"none"})
              $(this).css({border:"1px solid #464748"})
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

        $(".js-size-model").click(function(){
          $(".js-size-modal-wrp").modal("show")
        })
    //Save style popup
        $(window).scroll(function(){
          let windowHeight = ($(window)[0].innerHeight)
        let bottomHeight =  $('.btn-wrp')[0].offsetTop 
        let heightELem = $('.btn-wrp')[0].clientHeight;
        let totalOffset = (bottomHeight + heightELem);
        let scrollSpacePoint =  windowHeight - totalOffset;
        let scrollPoint = totalOffset +  scrollSpacePoint;
        if($(window).scrollTop() <= scrollPoint ) {
          $('.btn-wrp').addClass("sticky-btn");
          
        }else {
          $('.btn-wrp').removeClass("sticky-btn");
          
        }
            // console.log($(window).scrollTop())
            console.log("windowHeight" + "" +scrollSpacePoint )
            console.log("scrollPoint" + "" +scrollPoint )
            console.log("scrollPoint" + "" +totalOffset )
            // console.log("btn height " + bottomHeight )
        })

    //Save style model
        var CreateMoreStyles = document.querySelector('.create-more-styles')
        CreateMoreStyles.addEventListener("click", function (event) {
          setTimeout(function(){ 
            $('.bd-example-modal-lg').modal('show');
            }, 650);
          });

        $(".js-size-model").click(function(){
          $(".js-size-modal-wrp").modal("show")
        })
    }
}

export default ProductDetais;