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

listViewButton.addEventListener('click', () => {
  list.classList.remove('grid-item');
  list.classList.add('list-item');
});
gridViewButton.addEventListener('click', () => {
  list.classList.remove('list-item');
  list.classList.add('grid-item');
});

// Color select 

const clrhightlight = document.querySelectorAll('.color-list__item');
const colorspan = document.querySelectorAll('.color-circle');

// clrhightlight.addEventListener('click', () => {
//   if (colorspan.classList.contains('active')) {
//     colorspan.classList.remove('active');
//   } 
//   else {
//     colorspan.classList.add('active');
//   }
// });

function addActive(element) { 
   element = this; 
   if (element.classList.contains('active')) 
   { element.classList.remove('active'); } 
   else { childrens.forEach(function(e) { 
      e.classList.remove('active'); 
   }); 
   element.classList.add('active'); } 
}



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
         item.addEventListener('click', () => { 
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