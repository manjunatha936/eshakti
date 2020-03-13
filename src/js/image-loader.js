
/*eslint-disable*/
// Load image after scroll
class lazyLoader {
    constructor() {
        //Lazy image loader
        var eventList = ["load", "scroll"];
        for(event of eventList) {
            window.addEventListener(event, function() {
                    var loadingImage = document.getElementsByClassName("js-loading-card__img");
                    var loadingcard = document.getElementsByClassName("js-loading-card");
                    Array.prototype.forEach.call(loadingcard, function(el2) {
                        var docViewBottom = window.innerHeight;
                        var targetTop = el2.getBoundingClientRect().top + 150;
                        console.log("yes")
                        if((targetTop < ((docViewBottom / 2) + 300))) {
                        el2.classList.add('active')
                        
                        }
                    });
                    Array.prototype.forEach.call(loadingImage, function(el) {
                        var docViewBottom2 = window.innerHeight;
                        var targetTop2 = el.getBoundingClientRect().top + 150;
                        if((targetTop2 < ((docViewBottom2 / 2) + 300))) {
                        var DataArtr = el.getAttributeNode('data').value;
                        el.setAttribute('src', DataArtr);
                        
                        }
                    });

                    
            });
        }
    }
}


export default lazyLoader;