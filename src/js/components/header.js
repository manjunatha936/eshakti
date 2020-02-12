/*eslint-disable*/
import $ from "jquery"

class HeaderInteractions {
  constructor() {
    if (document.querySelector(".web-header")){
      this.init();
    }
  }

  init() {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
          $('header').addClass("sticky");
        }
        else {
          $('header').removeClass("sticky");
        }
    });

    var data_breaks = $('.web-header__menulinks').attr('data-breaks').split(',');
    var break_count = 0;
    for(var i=0;i<data_breaks.length-1;i++) {
        var break_val = parseInt(data_breaks[i]);
        break_count = break_count + break_val;
        $(".web-header__menulinks > li:nth-of-type(" + (break_count + i) + ")").after("<li class='seperator'></li>");
    }
  }
}

export default HeaderInteractions;