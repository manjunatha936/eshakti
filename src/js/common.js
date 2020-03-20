import "../scss/main.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

import "bootstrap/js/src/dropdown";
import "bootstrap/js/src/tab";
import "bootstrap/js/src/modal"

import "../pug/index.pug";
import "../pug/repeat-customer.pug";
// import "../pug/about.pug";
import "../pug/contact.pug";
import "../pug/product-details.pug";
// import "../pug/product-listing.pug";
import "../pug/productlisting.pug";
import "../pug/cart.pug";
import "../pug/checkout.pug";
import "../pug/order-placed.pug";
import "../pug/account-wishlist.pug";

import HeaderInteractions from "./components/header";
const headerfns = new HeaderInteractions();

// import "./components/header";
import ProductDetais from './product-listing'
const productDetais = new ProductDetais();


import lazyLoader from './image-loader'
const lazyImages = new lazyLoader();
// console.log("Hi, this page is common page!"); // eslint-disable-line no-console

import "../js/components/select-drop";


// Favourite
const favouriteToggle = Array.from(document.querySelectorAll('.favourite'));

Array.from(favouriteToggle).forEach(node => {
    node.addEventListener('click', (event) => {
        event.stopPropagation();
        node.classList.toggle('active');
    })
});
