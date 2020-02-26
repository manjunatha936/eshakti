// import $ from 'jquery';
// import 'hammerjs';

// // // Get a reference to an element.
// var square = document.querySelector('.scroll-div');

// var touchControl = new Hammer(square);
// touchControl.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
// touchControl.on("panstart", dragElement)
//             .on("panend", resetElement);

// function dragElement(event) {
//     if(event.offsetDirection == 16) {
//         square.style.top = 'calc(100% - 100px)';
//     }
//     else {
//         if(event.deltaY < 0 && event.deltaY > -150) {
//             square.style.top = 'calc(100% + ' + event.deltaY + 'px - 100px)';
//         }
    
//         if((event.deltaY) < -150) {
//             square.style.top = 0;
//             square.classList.add("mystyle");
//         }
//     }
    
// };

// function resetElement() {
//     if(event.offsetDirection == 16) {
//         square.style.top = 'calc(100% - 100px)';
//     }

//     else if(!square.classList.contains('mystyle')) {
//             // alert('reset');
//             square.style.top = 'calc(100% - 100px)';
//         }
//     // }
// };