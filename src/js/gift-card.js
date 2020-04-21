import $ from 'jquery';
import 'parsleyjs';

//Input inside Radio
$(".form-template .radio-group.text .radio-text-input").on('keyup', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
    var val = $(this).val();
    $(this).parents('.radio-group').find('input:radio').prop("checked", true).attr("value",val);
});

var group = $(".radio-text-input").parents(".form-group");

$(group).find('input:radio').on('change', function (e) {
    if(!$(".radio-text-input").parents('.radio-group').find('input:radio').is(':checked')) { 
        $(".radio-text-input").val("");
    }
});

//date picker
$(".form-template .date-selector input").on('click', function (e) {
    $(this).focus();
});


//Validate form
$(".form-template button").on('click', function () {
    $(this).parents('form').parsley().validate();  
});