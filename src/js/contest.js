import Macy from 'macy';
import $ from 'jquery'

var macyInstance = Macy({
    container: '.masonry',
    trueOrder: false,
    margin: 40,
    columns: 2,
    breakAt: {
        1199: {
            margin: 30
        },
        991: {
            margin: 20
        },
        767: {
            margin: 25,
            columns: 1
        },
        575: {
            margin: 20
        },
        399: {
            margin: 15
        }
    }
});


$(window).on('load', function(){
    macyInstance.reInit();
})