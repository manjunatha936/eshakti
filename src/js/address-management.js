
import $ from 'jquery'
import 'parsleyjs';



class addressManagement {
    constructor() {
        this.init();
        
    }
    init() {
        $(document).ready(function(){
            $(".address-checkbox").on("click",function(){
                if($(this).is(":not(:checked)")){
                    console.log("in");
                    $(this).parent(".label-container").siblings(".change-address-form").fadeIn();
                    $(".js-change-address").addClass("js-to-validate");
                }
                else{
                    $(this).parent(".label-container").siblings(".change-address-form").fadeOut();
                    $(".js-change-address").removeClass("js-to-validate");
                }
            });
            
            // $('.form-address').parsley();

            $('.form-address .address-btn').on('click', function () {
                console.log("in");
                // var block = $(".form-address .js-to-validate").find("input");
                // $('.form-address').parsley().validate(block);

                $('.form-address .js-to-validate :input:not(:button), .form-address .js-to-validate select').each(function (index, value) { 
                    $(this).parsley().validate();
                  });
            });

     
        });


        
        $(".js-help-submit").on('click', function () {
            $(this).parents('form').parsley().validate();  
        });
    }
}

export default addressManagement;