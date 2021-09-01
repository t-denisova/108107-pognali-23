"use strict";

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const logoNormal = document.querySelector('.header__logo-wrapper--normal');
const logoInverse = document.querySelector('.header__logo-wrapper--inverse');
const burger = document.querySelector('.header__action');
let headerIsReversed = false;
logoInverse.style.display="none";

window.onscroll = function () {
  if (window.pageYOffset >=50) {
    header.classList.add('header--inverse');
    menu.classList.add('menu--inverse');
    logoNormal.style.display="none";
    logoInverse.style.display="block";
    burger.classList.add('header__action--inverse');
    headerIsReversed = true;
  } else {
    header.classList.remove('header--inverse');
    menu.classList.remove('menu--inverse');
    logoNormal.style.display="block";
    logoInverse.style.display="none";
    burger.classList.remove('header__action--inverse');
    headerIsReversed = false;
  }
};
