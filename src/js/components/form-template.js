import $ from 'jquery';
import 'parsleyjs';

import OverlayScrollbar from './overlay-scrollbar';
const addressScrollbar = new OverlayScrollbar()


class formTemplate {
    constructor() {
            this.init();
    }

    init() {

        $(".form-template button").on('click', function () {
            $(this).parents('form').parsley().validate();  
        });

        $('.form-template select').on('change', function() {
            $(this).parsley().validate();
        });
    }

}

export default formTemplate;


  