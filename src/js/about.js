import $ from 'jquery';
// import './plugins/jquery-ui.min';
import './plugins/jquery.mobile';
// import 'hammerjs';
// import 'jquery-touch-events';

$(document).ready(function(){
    alert(1);
    $('.content').on('tab', function(e) { 
        console.log('User tapped #myElement'); 
    });
});
// // var position = 0;

// $(".scroll-div").draggable({
//     axis: "y",
//     revert: function() {
//         // console.log(this);
//         // if($(this).offset().top < 450) {
//         //     // alert(1);
//         //     $(".scroll-div").animate({top: 0}, 300).addClass('active');
//         //     return false
//         // }
//         // else {
//         //     // alert($(this).offset().top);
//         //     return true
//         // }
//     },
//     containment: ".main-div",
//     stop: function(ev, ui) {
//         if(this.offsetTop < 450) {
//             $(".scroll-div").animate({top: 0}, 300).addClass('active');
//         }
//         else {
//             $(".scroll-div").animate({top: 510}, 300);
//         }
//     },
//     drag: function(ev, ui) {
//         if(this.offsetTop > 510 | this.offsetTop < 0) {
//             return false
//         }
//         if(this.offsetTop > 0 && $('.scroll-div').hasClass('active')) {
//             $(".scroll-div").animate({top: 510}, 300).removeClass('active');
//         }
//     },
//     // drag: function(ev, ui) {
//         // if (ui.originalPosition.top - ui.offset.top > 0) {
//         //     alert(1);
//         // }
//         // console.log(ev);
//         // if(ev.clientY > 450) {
//         //     $(this).css('top', 0).addClass('active');
//         // }
//         // else {
//         //     $(this).animate({top: 510}, 300);
//         // }
//         // if (ui.originalPosition.top - ui.offset.top < 0) {
//         //     return false;
//         // }
//         // else {
//         //     return true
//         // }
//         // alert(1);
//         // if (ui.originalPosition.top - ui.offset.top < 0) {
//         //     console.log('Dragged Down');
//         //     if($('.content').scrollTop() <= 0) {
//         //         $(".scroll-div").css('top', 'calc(100% - 100px)').removeClass('active');
//         //     }
//         // } else {
//         //     console.log('Dragged Up');
//         //     // if ($(".scroll-div").hasClass('active')) {
//         //     //     return;
//         //     // }
//         //     // else {
                
//         //     // }
//         // }
//     // }
// });

// // // Get a reference to an element.
// var square = document.querySelector('.scroll-div');
// var content = document.querySelector('.content');
// var body = document.querySelector('html');

// var touchControl = new Hammer(square);
// var touchContent = new Hammer(content);
// // touchControl = new Hammer.Manager(square, {
// //     touchAction: 'auto',
// //     recognizers: [
// //         [Hammer.Pan,{ direction: Hammer.DIRECTION_HORIZONTAL }],
// //     ]
// // });
// touchControl.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// touchContent.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// touchControl.on("panstart", dragElement)
//             .on("panend", resetElement);

// touchContent.on("panstart", function(e){
//     if(e.offsetDirection == 16) {
//         square.classList.remove('mystyle');
//         body.classList.remove("overflow-hidden");
//         square.style.top = 'calc(100% - 100px)';
//     }
//     else {
//         alert(1);
//         // var x = content.scrollTop;
//         // content.animate({scrollTop:x + 50}, 500, 'swing');
//     }
// });

// function dragElement(event) {
//     if(event.offsetDirection == 16) {
//         square.classList.remove('mystyle');
//         body.classList.remove("overflow-hidden");
//         square.style.top = 'calc(100% - 100px)';
//     }
//     else if (!square.classList.contains('mystyle')){
//         if(event.deltaY < 0 && event.deltaY > -120) {
//             square.style.top = 'calc(100% + ' + event.deltaY + 'px - 100px)';
//         }
    
//         if((event.deltaY) < -120) {
//             square.style.top = 0;
//             square.classList.add("mystyle");
//             body.classList.add("overflow-hidden");
//         }
//     }
    
// };

// function resetElement() {
//     if(event.offsetDirection == 16) {
//         square.style.top = 'calc(100% - 100px)';
//         square.classList.remove('mystyle');
//         body.classList.remove("overflow-hidden");
//     }

//     else if(!square.classList.contains('mystyle')) {
//         square.style.top = 'calc(100% - 100px)';
//     }
// };

// $('.content').on('scroll', function() {
//     if($(this).scrollTop() <= 0) {
//         $(this).addClass('attop');
//     }
//     else {
//         $(this).removeClass('attop');
//     }
// })