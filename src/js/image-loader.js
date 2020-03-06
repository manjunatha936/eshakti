import $ from 'jquery'
/*eslint-disable*/
// Load image after scroll
class lazyLoader {
    constructor() {
        function isIE() {
        var ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie; 
        }
        
        if (isIE()) {
        $(window).on('load scroll', function() {
            $('.js-loading-card__img').each(function(el) {
                var dataSrc = $(this).attr('data');
                if(!(onView($(this)))){
                    $(this).attr('src', dataSrc);
                    $(this).parents(".js-loading-card").addClass('active');
                }
            }); 
        });
        }
        
        else {

        var eventList = ["load", "scroll"];
        for(event of eventList) {
            window.addEventListener(event, function() {
                var loadingImage = document.getElementsByClassName("js-loading-card__img");
                var loadingcard = document.getElementsByClassName("js-loading-card");
                Array.prototype.forEach.call(loadingcard, function(el2) {
                    if(!(onView(el2))){
                    el2.classList.add('active');
                    }
                });
                Array.prototype.forEach.call(loadingImage, function(el) {
                    if(!(onView(el))){
                    var DataArtr = el.getAttributeNode('data').value;
                    el.setAttribute('src', DataArtr);
                    
                    }
                });

                
            });
        }
    }
            
        function onView(target) {
            var $target = $(target);
            var $window = $(window);
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var targetTop = $target.offset().top + 150;
            // var targetBottom = targetTop + $target.height();
            return ((targetTop >= docViewBottom));
        }

    }
}

export default lazyLoader;