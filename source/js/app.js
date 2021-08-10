"use strict";

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.header__logo');
const burger = document.querySelector('.header__action');
let headerIsReversed = false;

window.onscroll = function () {
  if (window.pageYOffset >=50) {
    header.classList.add('header--inverse');
    menu.classList.add('menu--inverse');
    logo.classList.add('logo--inverse');
    burger.classList.add('header__action--inverse');
    headerIsReversed = true;

  } else {
    header.classList.remove('header--inverse');
    menu.classList.remove('menu--inverse');
    logo.classList.remove('logo--inverse');
    burger.classList.remove('header__action--inverse');
    headerIsReversed = false;
  }
};
