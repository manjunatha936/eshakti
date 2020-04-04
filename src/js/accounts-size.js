import $ from 'jquery'
import 'parsleyjs';

$(".js-edit-size , .js-new-profile").on('click', function () {
    console.log("in");
    $('.js-size-screen').fadeOut("fast", function(){
        $('.js-size-edit').fadeIn('slow');
    });
});


import ProductDetais from './product-details/product-details'
const productDetais = new ProductDetais();