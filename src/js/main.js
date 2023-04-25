/* eslint-env browser */

import openMenu from './modules/openMenu';
import makeSearch from './modules/makeSearch';
import changeLang from './modules/changeLang';

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
});
