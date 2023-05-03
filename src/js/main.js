/* eslint-env browser */
import Swiper, { Navigation } from 'swiper';
import openMenu from './modules/openMenu';
import makeSearch from './modules/makeSearch';
import changeLang from './modules/changeLang';

// core version + navigation, pagination modules:
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slider',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('DOMContentLoaded', () => {
  makeSearch(
    '.options__search-icon',
    '.search-bar',
    'search-bar--active',
    '.header',
    '.header__bottom',
  );
  openMenu();
  changeLang();
  swiper();
});
