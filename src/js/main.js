/* eslint-env browser */
import createSwiper from './modules/trainersSlider';
import openMenu from './modules/openMenu';
// import makeSearch from './modules/makeSearch';
import changeLang from './modules/changeLang';
import smoothScroll from './modules/smoothScroll';
import accordion from './modules/accordion';
import makeWritingEffect from './modules/makeWritingEffect';

window.addEventListener('DOMContentLoaded', () => {
  // makeSearch(
  //   '.options__search-icon',
  //   '.search-bar',
  //   'search-bar--active',
  //   '.header',
  //   '.header__bottom',
  // );
  makeWritingEffect(
    '.handwritten-decoration__text--left',
    'International online academy of aesthetics',
  );
  makeWritingEffect(
    '.handwritten-decoration__text--right',
    'International online academy of aesthetics',
  );
  openMenu();
  changeLang();
  createSwiper();
  smoothScroll('.footer__contacts-scroll');
  accordion();
});
