/* eslint-env browser */
import createSwiper from './modules/trainersSlider';
import openMenu from './modules/openMenu';
// import makeSearch from './modules/makeSearch';
import changeLang from './modules/changeLang';
import smoothScroll from './modules/smoothScroll';

window.addEventListener('DOMContentLoaded', () => {
  // makeSearch(
  //   '.options__search-icon',
  //   '.search-bar',
  //   'search-bar--active',
  //   '.header',
  //   '.header__bottom',
  // );
  openMenu();
  changeLang();
  createSwiper();
  smoothScroll('.footer__contacts-scroll');
});
