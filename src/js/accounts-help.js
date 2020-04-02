import $ from 'jquery';
import 'parsleyjs';


$(".js-help-submit").on('click', function () {
    $(this).parents('form').parsley().validate();  
});


  