import popupInit from './custom-popup';
const Showpopup = new popupInit();
import OverlayScrollbar from './components/overlay-scrollbar';
const overScrollbar = new OverlayScrollbar(".save-item-transition")
const innerScrollbar = new OverlayScrollbar(".style-contain")
console.log('Product listing code');

// Side-sticky
window.addEventListener("scroll", function (event) {
   if (window.innerWidth > 767) {
      var stickyLeft = document.querySelector('.side-filter');
      var stickyFilterOff = stickyLeft.getBoundingClientRect().top;
      var stickyft = document.querySelector('.main-footer').getBoundingClientRect().top;
      var stickyImages = document.querySelector('.js-product-header').getBoundingClientRect().top;
      var docHeight = window.innerHeight;
      if(stickyFilterOff < 0) {
         stickyLeft.classList.add('sticky-left');

         if(stickyft < docHeight) {
            stickyLeft.classList.remove('sticky-left');
         }
      }
      else if(stickyft < docHeight || stickyImages > 0) {
         stickyLeft.classList.remove('sticky-left');
      }
      
   }
});

//Top sticky menu in mobile
window.addEventListener("scroll", function (event) {
   if (window.innerWidth < 768) {
      var stickyFilter = document.querySelector('.products-header');
      var stickyFilterOff = stickyFilter.getBoundingClientRect().top;
      var stickyft = document.querySelector('.main-footer').getBoundingClientRect().top;
      var stickyImages = document.querySelector('.js-product-header').getBoundingClientRect().top;
      var docHeight = window.innerHeight;
      if(stickyFilterOff < 0) {
         stickyFilter.classList.add('sticky-block');

         if(stickyft < docHeight) {
            stickyFilter.classList.remove('sticky-block');
         }
      }

      else if(stickyft < docHeight || stickyImages > 0) {
         stickyFilter.classList.remove('sticky-block');
      }
      
   }
});

// List view and grid view 
const listViewButton = document.querySelector('.list-view-btn');
const gridViewButton = document.querySelector('.grid-view-btn');
const viewList = Array.from(document.querySelectorAll('.view-item'));
const list = document.querySelector('.js-products');

listViewButton.addEventListener('click', () => {
   list.classList.remove('grid-item');
   list.classList.add('list-item');
 });
 
 gridViewButton.addEventListener('click', () => {
   list.classList.remove('list-item');
   list.classList.add('grid-item');
 });

 // Changing mode of the view
 const handleClickl = (ek) => {
   ek.preventDefault();
   viewList.forEach(node => {
     node.classList.remove('active');
   });
   ek.currentTarget.classList.add('active');
 }
 viewList.forEach(node => {
   node.addEventListener('click', handleClickl)
 });
 

// Dropdon sortby
window.onload = function(){
   let dropBtn = document.querySelector('.dropdown-select');
   let dropItem = Array.from(document.querySelectorAll('.dropdown-menu li'));
   for(const opt of dropItem){
      opt.addEventListener("click",(e)=>{
         let val = e.target.textContent;
         dropBtn.innerHTML= val
         console.log("hello");
      })
   }
};

// Side-filter checkbox selection and clear the selection

let checkInput = Array.from(document.querySelectorAll('.label-container input'))

Array.from(checkInput).forEach(node => {
   node.addEventListener('change', (event) => {
      let panelCard = event.target.closest(".panel-card");
      let clearButtons = panelCard.querySelector('.js-check-clear');
      let selectedCheckBoxCount = panelCard.querySelectorAll("input:checked");

      if (event.target.checked) {
         clearButtons.classList.add('active');
      }
      
      if (!selectedCheckBoxCount.length) {
         clearButtons.classList.remove('active');
      }
   })
});

//  Clearing the buttons and button as well
let clearButtons = Array.from(document.querySelectorAll('.js-check-clear'));
clearButtons.forEach(clearBtn => {
   clearBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      let panelCard = event.target.closest(".panel-card");
      let checkChecboxes = Array.from(panelCard.querySelectorAll('.label-container input'));

      checkChecboxes.forEach(checkbox => {
         checkbox.checked = false;
      })
      clearBtn.classList.remove('active');
   })
});

// Single selcetion of Neckle and Product discount alert messsage

let checkRadio = Array.from(document.querySelectorAll('.neck-wrapper .style-check'))
let alertContent = document.querySelector('.product-alert');

Array.from(checkRadio).forEach(node => {
   node.addEventListener('change', (event) => {
      event.stopPropagation();
      let panelCard = event.target.closest(".panel-card");
      let clearNecks = panelCard.querySelector('.js-check-clear');
      
      if (event.target.checked) {
         clearNecks.classList.add('active');
         alertContent.classList.add('class-cheked');
      }
   })
});

let clearRadio = Array.from(document.querySelectorAll('.js-check-clear'));

Array.from(clearRadio).forEach(clearSelect => {
   clearSelect.addEventListener('click', (event) => {
      let panelCard = event.target.closest(".panel-card");
      let checkRadio = Array.from(panelCard.querySelectorAll('.neck-wrapper .style-check'));

      checkRadio.forEach(checkbox => {
         checkbox.checked = false;
      })
      clearSelect.classList.remove('active');
      alertContent.classList.remove('class-cheked');
   })
});

// accordian info
class Accordion {
   constructor(heading) {
      this.heading = heading;
   }   
   showAll() {
      const accordionHeading = Array.from(document.querySelectorAll(this.heading));
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

// SIDE FILTERS ONLY FOR MOBILE
const filterMobile = document.querySelector('.product-filter-mob');
const filterSide = Array.from(document.querySelectorAll('.side-filter'));
const filterBody = document.querySelector('body');
const filterClose = Array.from(document.querySelectorAll('.btn-close'));
const sortBy = document.querySelector('.filter-sort');
const sortDropdown = document.querySelector('.dropdown');
const overlayDiv = document.createElement('div');
const sortClose = document.querySelector('.btn-close-sort');


filterMobile.addEventListener('click', () => {
   filterSide.forEach(node => {
      node.classList.add('active');
   })
});

filterClose.forEach(closeBtn => {
   closeBtn.addEventListener('click', () => {
      filterSide.forEach(node => {
         // event.stopPropagation();
         node.classList.remove('active');
      })
   });
});


// sort by
if(window.innerWidth < 768) { 
   sortBy.addEventListener('click', (e) => {
      e.stopPropagation();
      sortDropdown.classList.add('active');
      sortBy.before(overlayDiv);
      overlayDiv.classList.add('overlay-show');
      filterBody.classList.add('scroll');
   });
   // Sortclose
   sortClose.addEventListener('click', (e) => {
      e.stopPropagation()
      sortDropdown.classList.remove('active')
      overlayDiv.classList.remove('overlay-show');
      filterBody.classList.remove('scroll');
   });
}



// Mobile Show-products sticky


// window.addEventListener("scroll", function (event) {
//    var stickyFilter = document.querySelector('.products-header');
//    var $target = $(stickyFilter);
//    var $window = $(window);
//    var docViewTop = $window.scrollTop();
//    var docViewBottom = docViewTop + $window.height();
//    var targetTop = $target.offset().top;
//    if(docViewTop == 0) {
//       stickyFilter.classList.remove('sticky-block');
//    }
//    else if(docViewTop >= targetTop) {
//       stickyFilter.classList.add('sticky-block');
//    }
// });
