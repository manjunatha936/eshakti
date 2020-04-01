import $ from 'jquery';
import 'parsleyjs';



$('.js-profile-edit').click(function(e){ 
    e.preventDefault();   
    $('.screen-info').fadeOut("fast", function(){
        $('.screen-edit').fadeIn('slow');
    });
});

// $('.js-profile-save').click(function(e){ 
//     e.preventDefault();   
//     $('.screen-edit').fadeOut("fast", function(){
//         $('.screen-info').fadeIn('slow');
//     });
// });

$(".password-popup .form-button").on('click', function () {
    $(this).parents('form').parsley().validate();  
});

$(".js-profile-save").on('click', function () {
    $(this).parents('form').parsley().validate();  
});

  