import $ from 'jquery'
import 'parsleyjs';

$(".js-add-address").on('click', function () {
    console.log("in");
    $('.old-address').fadeOut("fast", function(){
        $('.form-element-container').fadeIn('slow');
    });
});