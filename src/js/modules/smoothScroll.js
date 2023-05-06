/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const smoothScroll = (trigger) => {
  const contactsScroll = document.querySelector(trigger);

  contactsScroll.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

export default smoothScroll;
