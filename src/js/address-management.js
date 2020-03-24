

import $ from 'jquery'

class addressManagement {
    constructor() {
        this.init();
      
    }
 
    init() {
        $(document).ready(function(){
            $(".address-checkbox").on("click",function(){
                if($(this).is(":not(:checked)")){
                    $(this).parent(".label-container").siblings(".change-address-form").css("display","block")
                }
                else{
                    $(this).parent(".label-container").siblings(".change-address-form").css("display","none")
            
                }
            })            
     
        })
    }
}

const address = new addressManagement();