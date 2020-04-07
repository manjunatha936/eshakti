import $ from 'jquery';
import 'parsleyjs';


class formTemplate {
    constructor() {
            this.init();
    }

    init() {

        $(".form-template button").on('click', function () {
            $(this).parents('form').parsley().validate();  
        });
    }

}

export default formTemplate;


  