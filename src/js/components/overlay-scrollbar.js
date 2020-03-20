/*eslint-disable*/
import $ from 'jquery'
import OverlayScrollbars from 'overlayscrollbars';
class OverlayScrollbar {
  constructor(wrapper) {
    this.wrapper = wrapper;
      this.init();
    
  }

  init() {
      let overscroll = OverlayScrollbars(document.querySelectorAll(this.wrapper), {  
                scrollbars : {
                    clickScrolling : true
                },
                overflowBehavior : {
            y : "never",
          }, });
  
      let productScroll = OverlayScrollbars(document.querySelector(".model-wrp"), { overflowBehavior : {
          x : "never",
        },});
      let measureScroll = OverlayScrollbars(document.querySelector(".js-measure-content"), { overflowBehavior : {
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
  }
}

export default OverlayScrollbar;
