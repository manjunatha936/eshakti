import $ from 'jquery'
import 'parsleyjs';

$(".js-add-address").on('click', function () {
    $('.old-address').fadeOut("fast", function(){
        $('.form-element-container').fadeIn('slow');
    });
});