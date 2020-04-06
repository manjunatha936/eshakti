import $ from 'jquery'
import 'parsleyjs';
import "bootstrap/js/src/modal";

$(".js-edit-size , .js-new-profile").on('click', function () {
    $('.js-size-screen').fadeOut("fast", function(){
        $('.js-size-edit').fadeIn('slow');
    });
});

$(".js-size-model").click(function(){
    $(".js-size-modal-wrp").modal("show")
});


import ProductDetais from './product-details/product-details'
const productDetais = new ProductDetais();