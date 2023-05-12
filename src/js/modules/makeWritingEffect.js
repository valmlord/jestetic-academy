const makeWritingEffect = (blockSelector, str) => {
  const text = str;
  const containers = document.querySelectorAll(blockSelector);

  containers.forEach((container) => {
    let index = 0;
    let isTextShown = false;

    function checkScroll() {
      if (!isTextShown && isScrolledIntoView(container)) {
        isTextShown = true;
        const interval = setInterval(() => {
          container.textContent += text[index];
          container.classList.add('animate');
          index += 1;
          if (index === text.length) {
            clearInterval(interval);
          }
        }, 100);
      }
    }

    function isScrolledIntoView(element) {
      const rect = element.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }

    window.addEventListener('scroll', checkScroll);
  });
};

export default makeWritingEffect;
