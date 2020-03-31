/*eslint-disable*/
import $ from "jquery"

class leftSticky {
    constructor() {
        if (document.querySelector(".js-left-sticky")) {
            this.init();
        }
    }

    init() {

        $(window).on('ready', function () {
            if ($(".js-left-sticky").height() < $(".js-left-sticky").parent().height()) {
                $(".js-left-sticky").addClass("position-relative");
            }
        });
    

    $(window).on('scroll', function() {
        var parent = $(".js-left-sticky").parent();
        var parentHeight = $(parent).height();
        var leftHeight = $(".js-left-sticky").height();
        var parentTop = $(parent).offset().top;
        var scrollPosition = $(window).scrollTop();
        var parentScrolled = scrollPosition - parentTop;

        if ($(".js-left-sticky").height() > parentHeight) {
            $(".js-left-sticky").addClass("position-relative");
        }


        if (scrollPosition > $(".web-header").height()) {
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


        var tabindex = $(".js-left-sticky ul li a.active").parent().index();
var leftpos = 0;
for (var i = 0; i < tabindex; i++) {
    leftpos = leftpos + $('.js-left-sticky ul li').eq(i).outerWidth() + 20;
}
$('.js-left-sticky ul').scrollLeft(leftpos);
    }

}

export default leftSticky;