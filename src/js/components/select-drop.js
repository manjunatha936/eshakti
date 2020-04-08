import $ from 'jquery';

/*function for selectric alternative*/
function selectit(elem){
    $(elem).not('.selectized').each(function(){
        $(this).wrap( "<div class='select_wrap'></div>" ).addClass('selectized')

        var select_el = $(this),
            list_el = $('<ul></ul>').attr('id', select_el.attr('id')).attr('name', select_el.attr('name')),
            active = select_el.find('option').eq(0),
            active_el = "",
            placeholder = $(this).attr('data-placeholder'),
            index_el = 0;

        if(placeholder){
            active = select_el.find('option').eq(1)
        }

        active_fn(active);

        function active_fn(data){
            active = data;
            active_el = $('<span></span>').attr('value',active.val()).attr('disabled',active.attr('disabled')).attr('data-text',active.attr('data-text')).text(active.text());
        }

        if(select_el.find('option:selected').length > 0){
            active = select_el.find('option:selected');
            index_el = active.index();
            active_fn(active);
        }

        select_el.children().each(function() {
            var option_el = $(this);
            $('<li></li>').attr('value',option_el.val())
                .attr('data-icon',option_el.attr('data-icon'))
                .attr('data-text',option_el.attr('data-text'))
                .attr('disabled',option_el.attr('disabled'))
                .text(option_el.text())
                .appendTo(list_el);
        });
        select_el.parent().append(active_el,list_el);
        if(placeholder){
            select_el.parent().find('ul li').eq(index_el+1).addClass('active');
            select_el.parent().find('ul').prepend("<li class='placeholder'>" + placeholder + "</li>");
        }
        else{
            select_el.parent().find('ul li').eq(index_el).addClass('active');
        }

        $(document).on('click','.select_wrap ul.open li' ,function(){
            var target_el = $(this);
            index_el = target_el.index();
            $(this).parents('.select_wrap').find('ul.open li').removeClass('active').eq(index_el).addClass('active');
            $(this).parents('.select_wrap').find('select').val(target_el.attr('value')).change();

            target_el.parents('.select_wrap').find('span').attr('value',target_el.attr('value'))
                .attr('data-icon',target_el.attr('data-icon'))
                .attr('data-text',target_el.attr('data-text'))
                .text(target_el.text());
            
            $(this).parents('.select_wrap').find('.overlay').remove();
            $(this).parents('.select_wrap').removeClass('open');
            $(this).parent().removeClass('open');
        });

        var span_elem = select_el.parent().find('span');

        $(span_elem).on('click',function(){
            $(this).parents('.select_wrap').find('ul').addClass('open');
            $(this).parents('.select_wrap').addClass('open');
            $(this).parents('.select_wrap').append("<div class='overlay'></div>");
        });

        $(document).on('click','.select_wrap .overlay',function(){
            $(this).parents('.select_wrap').removeClass('open');
            $(this).parents('.select_wrap').find('ul').removeClass('open');
            $(this).parents('.select_wrap').find('.overlay').remove();
        });
    });
}

selectit('.select_box');