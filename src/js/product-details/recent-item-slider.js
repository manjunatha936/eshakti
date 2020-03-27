import Swiper from 'swiper';

class RecentlyViewed {
    constructor() {
      if (document.querySelector(".js-recently-viewed")){
        this.init();
      }
    }
  
    init() {
  
     
    
      // keep track of swiper instances to destroy later
      let mySwiper;
    

  
        
        mySwiper = new Swiper ('.js-recently-viewed', {
          pagination: {
            el: '.our-team-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.left-arrow-img',
            prevEl: '.right-arrow-img',
          },
          // loop: true,
          spaceBetween:15,
          slidesPerView: 1.2,
          
          
          breakpoints: {
            320: {
              slidesPerView: 1.2,
     
              },
              410: {
                  slidesPerView: 1.4,
     
              },
              768: {
                  slidesPerView: 3.3,
     
              },
              1024: {
                  slidesPerView: 5.8,
     
              },
              1336: {
                  slidesPerView: 5.8,
     
              }
           
            
            }  
    
        });
    
    
    }
}

export default RecentlyViewed;