
import Swiper from 'swiper';

class realFashion {
    constructor() {
      if (document.querySelector(".js-fashion-slider")){
       
        this.init();
      }
    }
  
    init() {
  
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:31.25em)' );
  
    // keep track of swiper instances to destroy later
    let mySwiper;
  
    //////////////////////////////////////////////////////////////////
  
    const breakpointChecker=()=> {
    
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
  
        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
        // or/and do nothing
        return;
  
        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {
  
          // fire small viewport version of swiper
          return enableSwiper();
  
        }
  
    };  
  
    const enableSwiper=()=> {
      
      mySwiper = new Swiper ('.js-fashion-slider', {
        pagination: {
          el: '.our-team-pagination',
          clickable: true,
        },
        // loop: true,
        spaceBetween:15,
        
        slidesPerView: '1.2',
        breakpoints: {
          320: {
              slidesPerView: 1.2,
              spaceBetween: 10
          },
          410: {
              slidesPerView: 1.4,
              spaceBetween: 0
          },
          // when window width is >= 640px
          
          }  
  
      });
  
    };
  
    //////////////////////////////////////////////////////////////////
  
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
  
    // kickstart
    breakpointChecker();
    }
}
export default realFashion;