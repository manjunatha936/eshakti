// Load image after scroll
class lazyLoader {
    constructor() {
        if (document.querySelector(".js-img-lazy")){
                this.init();
            }
        }
          
    init() {
        //Lazy image loader
        var eventList = ["load", "scroll"];
        for(event of eventList) {
            window.addEventListener(event, function() {
                loadImage();
            });
        }

        var viewList = document.querySelector('.grid-view-btn');
        window.onload=function(){
            viewList.addEventListener('click', () => {
                setTimeout(function(){ 
                loadImage();
                }, 500);
            });
        };

        function loadImage() {
            var loadingcard = document.getElementsByClassName("js-loading-card");
            Array.prototype.forEach.call(loadingcard, function(el) {
                var loadingImage = el.querySelector(".js-loading-card__img");
                var docViewBottom = window.innerHeight;
                var targetTop = el.getBoundingClientRect().top + 100;
    
                if((targetTop < ((docViewBottom / 2) + 300))) {
                el.classList.add('active')
                var DataArtr = loadingImage.getAttributeNode('data').value;
                loadingImage.setAttribute('src', DataArtr);
                }
            });
        }
    }
}
export default lazyLoader;