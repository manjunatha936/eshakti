/*eslint-disable*/
import $ from "jquery"

class leftSticky {
    constructor() {
        console.log("IN");
        if (document.querySelector(".js-left-sticky")) {
            this.init();
        }
    }

    init() {

        if ($(window).width() > 992) {

            $(window).on('scroll', function () {

                var parent = $(".js-left-sticky").parent();
                var parentHeight = $(parent).height();
                var leftHeight = $(".js-left-sticky").height();
                var parentTop = $(parent).offset().top;
                var scrollPosition = $(window).scrollTop();
                var parentScrolled = scrollPosition - parentTop;

                if (scrollPosition > 110) {
                    $(".js-left-sticky").addClass("sticky");
                }

                else {
                    $(".js-left-sticky").removeClass("sticky").removeClass("sticky-bottom");
                }

                if ((parentHeight - parentScrolled) < (leftHeight + 100)) {
                    $(".js-left-sticky").removeClass("sticky").addClass("sticky-bottom");
                }

                else {
                    $(".js-left-sticky").removeClass("sticky-bottom");
                }
            });

        }
    }

}

export default leftSticky;