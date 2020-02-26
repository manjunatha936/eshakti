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