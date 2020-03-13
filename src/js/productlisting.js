

import Swiper from 'swiper';
import $ from 'jquery'
import "bootstrap/js/src/modal";
import "bootstrap/js/src/tab";

console.log('Product listing code');

// Side-sticky
window.addEventListener("scroll", function (event) {
   if (window.innerWidth > 767) {
      var stickyLeft = document.querySelector('.side-filter');
      var stickyFilterOff = stickyLeft.getBoundingClientRect().top;
      var stickyft = document.querySelector('.main-footer').getBoundingClientRect().top;
      var stickyImages = document.querySelector('.js-product-header').getBoundingClientRect().top;
      var docHeight = window.innerHeight;
      if(stickyFilterOff < 0) {
         stickyLeft.classList.add('sticky-left');

         if(stickyft < docHeight) {
            stickyLeft.classList.remove('sticky-left');
         }
      }
      else if(stickyft < docHeight || stickyImages > 0) {
         stickyLeft.classList.remove('sticky-left');
      }
      
   }
});

//Top sticky menu in mobile
window.addEventListener("scroll", function (event) {
   if (window.innerWidth < 768) {
      var stickyFilter = document.querySelector('.products-header');
      var stickyFilterOff = stickyFilter.getBoundingClientRect().top;
      var stickyft = document.querySelector('.main-footer').getBoundingClientRect().top;
      var stickyImages = document.querySelector('.js-product-header').getBoundingClientRect().top;
      var docHeight = window.innerHeight;
      if(stickyFilterOff < 0) {
         stickyFilter.classList.add('sticky-block');

         if(stickyft < docHeight) {
            stickyFilter.classList.remove('sticky-block');
         }
      }

      else if(stickyft < docHeight || stickyImages > 0) {
         stickyFilter.classList.remove('sticky-block');
      }
      
   }
});



const listViewButton = document.querySelector('.list-view-btn');
const gridViewButton = document.querySelector('.grid-view-btn');
const colorList = document.querySelectorAll('.view-item');
const list = document.querySelector('.js-products');


listViewButton.addEventListener('click', () => {
   list.classList.remove('grid-item');
   list.classList.add('list-item');
 });
 
 gridViewButton.addEventListener('click', () => {
   list.classList.remove('list-item');
   list.classList.add('grid-item');
 });
 
// Onclick active-state

const handleClickl = (ek) => {
   ek.preventDefault();
   colorList.forEach(node => {
     node.classList.remove('active');
   });
   ek.currentTarget.classList.add('active');
 }
 colorList.forEach(node => {
   node.addEventListener('click', handleClickl)
 });


// Dropdon sortby
let dropBtn = document.querySelector('.dropdown-select');
 let dropItem = document.querySelectorAll('.dropdown-menu li');
 for(const opt of dropItem){
   opt.addEventListener("click",(e)=>{
      let val = e.target.textContent;
      dropBtn.innerHTML= val
   })
 }


// Side-filter checkbox selection and clear the selection
let checkInput = Array.from(document.querySelectorAll('.label-container input'))

Array.from(checkInput).forEach(node => {
   node.addEventListener('change', (event) => {
      let panelCard = event.target.closest(".panel-card");
      let clearButtons = panelCard.querySelector('.js-check-clear');
      let selectedCheckBoxCount = panelCard.querySelectorAll("input:checked");

      if (event.target.checked) {
         clearButtons.classList.add('active');
      }
      
      if (!selectedCheckBoxCount.length) {
         clearButtons.classList.remove('active');
      }
   })
});

//  Clearing the buttons and button as well

let clearButtons = document.querySelectorAll('.js-check-clear')
clearButtons.forEach(clearBtn => {
   clearBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      let panelCard = event.target.closest(".panel-card");
      let checkChecboxes = panelCard.querySelectorAll('.label-container input');

      checkChecboxes.forEach(checkbox => {
         checkbox.checked = false;
      })
      clearBtn.classList.remove('active');
   })
});

// Product alert

const alertContent = document.querySelector('.product-alert');
const checkbox = document.querySelectorAll('.style-check');
const clear = document.querySelector('.clear-select');

checkbox.forEach(node => {
   node.addEventListener('change', (event) => { 
      if (event.target.checked) { 
         alertContent.classList.add('class-cheked');
         // event.target.nextElementSibling.children
         // alert(event.target.nextElementSibling.children);
      }
   })
});

//Clear the selcted list
clear.addEventListener('click', (el) => { 
   checkbox.forEach(node => {
      el.stopPropagation();
      node.checked = false;
      alertContent.classList.remove('class-cheked');
   });
})

// accordian info
class Accordion {
   constructor(heading) {
      this.heading = heading;
   }
   
   showOne() {
      const accordionHeading = document.querySelectorAll(this.heading);
      accordionHeading.forEach((item, key) => {
         item.addEventListener('click', () => { 
            accordionHeading.forEach(element => {
               element.classList.contains('active') ? 
                  element.classList.remove('active') : null;
            });
            item.classList.add('active');
         });
      });
   }
   
   showAll() {
      const accordionHeading = document.querySelectorAll(this.heading);
      accordionHeading.forEach((item, key) => {
         item.addEventListener('click', (event) => {
            item.classList.contains('active') ? 
               item.classList.remove('active') :            
               item.classList.add('active');
         });
        //  console.log(item);
      });
   }
}

const accordion = new Accordion('.panel-cardtitle');
// for open every use showAll();
accordion.showAll();

const filterMobile = document.querySelector('.product-filter-mob');
const filterSide = document.querySelectorAll('.side-filter');
const filterBody = document.querySelectorAll('body');
const filterClose = document.querySelector('.btn-close');

filterMobile.addEventListener('click', () => {
   filterSide.forEach(node => {
      node.classList.add('active');
   })
   filterBody.forEach(node => {
      node.classList.add('scroll');
   })
});

filterClose.addEventListener('click', () => {
   filterSide.forEach(node => {
      // event.stopPropagation();
      node.classList.remove('active');
   })
});




//Prodct details popup js code
$(document).ready(function(){
   var swiperStyle;
    var neckText,sleeveText,lengthText;
    neckText = sleeveText = lengthText = "As shown";
     $(".js-read-more").click(function(e){
       e.preventDefault()
       $(this).siblings('.more-info').toggle()
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
          
           768: {
             slidesPerView: 2.5,
      
           },
           1024: {
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
             swiperStyle = new Swiper('.js-style-slider', {
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
     
     $('')


     $(document).on('click','.close-card',function(){
      var $parent = $(this).parents('.slide-item').remove();
       let slideIndex = parseInt($(this).attr("slide-id"))
       --slideIndex; 
      //  swiperStyle.removeSlide(slideIndex  );
       
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
       e.offsetY ? e.offsetY = e.offsetY : e.offsetX = e.touches[0].pageX
       let y = e.offsetY/zoomer.offsetHeight*100
       
       $(this).css({ 
               'background-position-x' : 100 + '%',
               'background-position-y' : y + '%' ,  
           })
     });
  })
 
 //Save style model
 var CreateMoreStyles = document.querySelector('.create-more-styles')
 CreateMoreStyles.addEventListener("click", function (event) {
  setTimeout(function(){ 
    $('.bd-example-modal-lg').modal('show');
    }, 650);
  });
