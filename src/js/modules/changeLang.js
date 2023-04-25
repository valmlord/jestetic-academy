/* eslint-env browser */

const changeLang = () => {
  // get all elements with the class "language"
  const languageElems = document.querySelectorAll('.language');

  // loop through all elements and add event listeners to them
  languageElems.forEach((elem) => {
    // get the list of languages and the current language button
    const langList = elem.querySelector('.language__list');
    const currentLang = elem.querySelector('.language__current');

    // add an event listener to the current language button
    currentLang.addEventListener('click', () => {
      langList.classList.toggle('language__list--active');
    });

    // add event listeners to the languages in the list
    const langLinks = langList.querySelectorAll('.language__list-link');
    langLinks.forEach((langLink) => {
      langLink.addEventListener('click', (e) => {
        e.preventDefault();

        // get the text of the clicked language
        const newLang = langLink.textContent;

        // change the text of the current language button
        currentLang.querySelector('.language__current-name').textContent =
          newLang;

        // change the language in other elements with the class "language"
        languageElems.forEach((otherElem) => {
          if (otherElem !== elem) {
            const otherLangLinks = otherElem.querySelectorAll(
              '.language__list-link',
            );
            let flag = false;
            otherLangLinks.forEach((otherLangLink) => {
              if (otherLangLink.textContent === newLang) {
                flag = true;
              }
            });
            if (flag) {
              otherElem.querySelector('.language__current-name').textContent =
                newLang;
            } else {
              otherElem.querySelector('.language__current-name').textContent =
                'Espanol';
            }
          }
        });

        // hide the language list
        langList.classList.remove('language__list--active');
      });
    });
  });
};

export default changeLang;
