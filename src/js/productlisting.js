
/*eslint-disable*/
console.log('Product listing code');

const listViewButton = document.querySelector('.list-view-btn');
const gridViewButton = document.querySelector('.grid-view-btn');
const colorList = document.querySelectorAll('.view-item');
const list = document.querySelector('.js-products');

listViewButton.addEventListener('click', () => {
  list.classList.remove('grid-item');
  list.classList.add('list-item');
});
gridViewButton.addEventListener('click', () => {
  list.classList.remove('list-item');
  list.classList.add('grid-item');
});

// Onclick active-state

const handleClickl = (ek) => {
   ek.preventDefault();
   colorList.forEach(node => {
     node.classList.remove('active');
   });
   ek.currentTarget.classList.add('active');
 }
 colorList.forEach(node => {
   node.addEventListener('click', handleClickl)
 });


// Color select 

let colorPicker = document.querySelectorAll('.color-list__item');
let colorClear = document.querySelector('.clear-color');

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

// clear the selected colors

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
         // event.target.nextElementSibling.children
         // alert(event.target.nextElementSibling.children);
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