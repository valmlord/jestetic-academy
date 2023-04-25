/* eslint-env browser */

const openMenu = () => {
  // get the DOM elements we're working with and save them to constants
  const menu = document.querySelector('.header__bottom');
  const hamburger = document.querySelector('.top-menu__burger');
  const menuItems = document.querySelectorAll('.bottom-menu__nav-link');
  const line = document.querySelector('.header__line');

  // create a function to disable the menu on larger screens
  const disableMenu = () => {
    const largeScreen = window.innerWidth > 1169.98;
    if (largeScreen) {
      line.classList.remove('header__line--active');
      hamburger.classList.remove('top-menu__burger--active');
      menu.classList.remove('header__bottom--active');
    }
  };

  // add an event listener for clicks on the burger icon
  hamburger.addEventListener('click', () => {
    line.classList.toggle('header__line--active');
    hamburger.classList.toggle('top-menu__burger--active');
    menu.classList.toggle('header__bottom--active');
  });

  // add an event listener for clicks on menu items
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      disableMenu();
      menu.classList.remove('header__bottom--active');
      hamburger.classList.remove('top-menu__burger--active');
      line.classList.remove('header__line--active');
    });
  });

  // add an event listener for changes in browser window size
  window.addEventListener('resize', () => {
    disableMenu();
  });
};

export default openMenu;
