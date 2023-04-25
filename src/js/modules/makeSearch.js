/* eslint-env browser */

const makeSearch = (
  trigger,
  searchBar,
  activeClass,
  slidingPart,
  slidingMenu,
) => {
  const searchIcons = document.querySelectorAll(trigger);
  const searchContainer = document.querySelector(searchBar);
  const header = document.querySelector(slidingPart);
  const mobileMenu = document.querySelector(slidingMenu);
  let isSearchActive = false;

  searchIcons.forEach((searchIcon) => {
    searchIcon.addEventListener('click', () => {
      if (isSearchActive) {
        searchContainer.classList.remove(activeClass);
        header.style.paddingTop = '0';
        mobileMenu.style.marginTop = '0';
        isSearchActive = false;
      } else {
        searchContainer.classList.add(activeClass);
        header.style.paddingTop = '50px';
        if (window.innerWidth < 767.98) {
          mobileMenu.style.marginTop = '50px';
        }
        isSearchActive = true;
      }
    });
  });

  searchContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = searchContainer.querySelector('input[name="search"]');
    const searchValue = searchInput.value.trim();
    window.location.href = `/search?query=${searchValue}`;
  });

  document.addEventListener('click', (event) => {
    const isClickInside =
      searchContainer.contains(event.target) ||
      [...searchIcons].some((icon) => icon.contains(event.target));
    if (!isClickInside) {
      searchContainer.classList.remove(activeClass);
      header.style.paddingTop = '0';
      mobileMenu.style.marginTop = '0';
      isSearchActive = false;
    }
  });
};

export default makeSearch;
