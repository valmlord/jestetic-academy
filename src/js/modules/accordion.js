const accordion = () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-item__top');
    const content = item.querySelector('.accordion-item__bottom');

    header.addEventListener('click', () => {
      item.classList.toggle('open');

      if (item.classList.contains('open')) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
};

export default accordion;
