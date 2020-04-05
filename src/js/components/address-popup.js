import $ from 'jquery'
import 'parsleyjs';


class addressPopup {
    constructor() {
        this.init();
        
    }
    init() {
        $(document).ready(function(){
            $(".address-checkbox").on("click",function(){
                if($(this).is(":not(:checked)")){
                    $(this).parent(".label-container").siblings(".change-address-form").fadeIn();
                    $(".js-change-address").addClass("js-to-validate");
                }
                else{
                    $(this).parent(".label-container").siblings(".change-address-form").fadeOut();
                    $(".js-change-address").removeClass("js-to-validate");
                }
            });
            

            $('.form-address .address-btn').on('click', function () {
                $('.form-address .js-to-validate :input:not(:button), .form-address .js-to-validate select').each(function (index, value) { 
                    $(this).parsley().validate();
                  });
            });

     
        });

    }
}

export default addressPopup;