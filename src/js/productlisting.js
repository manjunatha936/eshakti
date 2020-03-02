// import $ from 'jquery'

/*eslint-disable*/
console.log('Product listing code');

const listViewButton = document.querySelector('.list-view-btn');
const gridViewButton = document.querySelector('.grid-view-btn');
const list = document.querySelector('.js-products');

// listViewButton.addEventListener('click', () => {
//   // if (productlist.classList.contains('fill')) {
//   //   productlist.classList.remove('fill');
//   // } else {
//   //   productlist.classList.add('fill');
//   // }
//   productlist.classList.toggle('fill');
// });
let styleSticky = `position:fixed;
            top:0;
            transition: .5s ease all;`
let styleRelative = `position:absolute;
            bottom:0;
            transition: .9s ease all;`;
let top = `top:0;
            transition: .9s ease top;`
let heightOfWrapper = list.scrollHeight
console.log(heightOfWrapper)
let stickyELement = document.querySelector('.product-details-sticky');
stickyHeight = stickyELement.scrollHeight
let stickyELementOffset = stickyELement.offsetHeight;
console.log(stickyELementOffset)
window.addEventListener("scroll", function(event) {
   var top = this.scrollY;
   console.log(top)

   if(top >= (stickyELementOffset-50) && top <= (heightOfWrapper - stickyHeight + 400 ) ){
      stickyELement.style=styleSticky;
   }
   else {
      stickyELement.style=styleRelative;

   }
   if( top <stickyELementOffset-50){
      stickyELement.style=top
   }


});
listViewButton.addEventListener('click', () => {
  list.classList.remove('grid-item');
  list.classList.add('list-item');
});
gridViewButton.addEventListener('click', () => {
  list.classList.remove('list-item');
  list.classList.add('grid-item');
});

// Color select 

let colorPicker = document.querySelectorAll('.color-list__item');
let colorClear = document.querySelector('.clear-color');
// let colorPicker = Array.from(document.querySelectorAll('.color-list__item'));

const handleClick = (e) => {
  e.preventDefault();
  colorPicker.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
}

colorPicker.forEach(node => {
  node.addEventListener('click', handleClick)
});

colorClear.addEventListener('click', (event) => { 
   colorPicker.forEach(node => {
      event.stopPropagation();
      node.classList.remove('active');
   })
})


// Product alert

let alertContent = document.querySelector('.product-alert');
const checkbox = document.querySelectorAll('.style-check');
const clear = document.querySelector('.clear-select');

checkbox.forEach(node => {
   node.addEventListener('change', (event) => { 
      if (event.target.checked) { 
         alertContent.classList.add('class-cheked');
         event.target.nextElementSibling.children
         alert(event.target.nextElementSibling.children);
      }
   })
});


//Clear the selcted list

clear.addEventListener('click', (el) => { 
   checkbox.forEach(node => {
      el.stopPropagation();
      node.checked = false;
      alertContent.classList.remove('class-cheked');
   });
})

 
// accordian info
class Accordion {
   constructor(heading) {
      this.heading = heading;
   }
   
   showOne() {
      const accordionHeading = document.querySelectorAll(this.heading);
      accordionHeading.forEach((item, key) => {
         item.addEventListener('click', () => { 
            accordionHeading.forEach(element => {
               element.classList.contains('active') ? 
                  element.classList.remove('active') : null;
            });
            item.classList.add('active');
         });
      });
   }
   
   showAll() {
      const accordionHeading = document.querySelectorAll(this.heading);
      accordionHeading.forEach((item, key) => {
         item.addEventListener('click', (event) => {
            item.classList.contains('active') ? 
               item.classList.remove('active') :            
               item.classList.add('active');
         });
        //  console.log(item);
      });
   }
}

const accordion = new Accordion('.panel-cardtitle');
// for open every use showAll();
accordion.showAll();