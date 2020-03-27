/*eslint-disable*/
import $ from 'jquery'
import OverlayScrollbars from 'overlayscrollbars';
class OverlayScrollbar {
  constructor(wrapper) {
    this.wrapper = wrapper;
      this.init();
    
  }

  init() {
      // let overscroll = OverlayScrollbars(document.querySelectorAll(".style-contain"), {  
      //           scrollbars : {
      //               clickScrolling : true
      //           },
      //           overflowBehavior : {
      //       y : "never",
      //     }, });
  
      let productScroll = OverlayScrollbars(document.querySelector(".model-wrp"), { overflowBehavior : {
          x : "never",
        },});

      let addressScroll = OverlayScrollbars(document.querySelector(".js-address-wrp"), { overflowBehavior : {
          x : "never",
        },});

      // let productScroll = OverlayScrollbars(document.querySelector(".model-wrp"), { overflowBehavior : {
      //     x : "never",
      //   },});

      let custompopupScroll = OverlayScrollbars(document.querySelector(".js-custom-scroll"), { overflowBehavior : {
          x : "never",
        },});

      let measureScroll = OverlayScrollbars(document.querySelector(".js-measure-content"), { overflowBehavior : {
          x : "never",
        },});
        
      let productDetails = OverlayScrollbars(document.querySelector(".product-details-list"), { overflowBehavior : {
          x : "never",
        },});
        
    document.addEventListener("DOMContentLoaded", function() {
        //The first argument are the elements to which the plugin shall be initialized
        //The second argument has to be at least a empty object or a object with your desired options
    });
    $('#myModal').on('show.bs.modal', function (e) {
        // overscroll.update();
        productScroll.update();
        // do something...
      })
      $('.js-save-style-item').on('click', function() {
        custompopupScroll.update();
      })
  }
}

export default OverlayScrollbar;
