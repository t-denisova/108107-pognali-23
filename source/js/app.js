"use strict";

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');

window.onscroll = function () {
  if (window.pageYOffset >=50) {
    header.classList.add('header--on-scroll')
    menu.classList.add('menu--on-scroll')
  } else {
    header.classList.remove('header--on-scroll')
    menu.classList.remove('menu--on-scroll')
  }
};
