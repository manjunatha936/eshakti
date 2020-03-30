import $ from 'jquery';


$('.js-profile-edit').click(function(e){ 
    e.preventDefault();   
    $('.screen-info').fadeOut("fast", function(){
        $('.screen-edit').fadeIn('slow');
    });
});

$('.js-profile-save').click(function(e){ 
    e.preventDefault();   
    $('.screen-edit').fadeOut("fast", function(){
        $('.screen-info').fadeIn('slow');
    });
});

  