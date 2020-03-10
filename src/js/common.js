import "../scss/main.scss";
// import "@babel/polyfill";
// import "bootstrap/js/src/dropdown";
import "bootstrap/js/src/modal"

import '@babel/polyfill';

if (window.NodeList && !NodeList.prototype.forEach) { NodeList.prototype.forEach = Array.prototype.forEach; }

import 'nodelist-foreach-polyfill';

import "../pug/index.pug";
import "../pug/repeat-customer.pug";
// import "../pug/about.pug";
import "../pug/contact.pug";
import "../pug/product-details.pug";
// import "../pug/product-listing.pug";
import "../pug/productlisting.pug";

import HeaderInteractions from "./components/header";
const headerfns = new HeaderInteractions();

// import "./components/header";
import ProductDetais from './product-listing'
const productDetais = new ProductDetais();

// import lazyLoader from './image-loader'
// const lazyImages = new lazyLoader();
// console.log("Hi, this page is common page!"); // eslint-disable-line no-console

