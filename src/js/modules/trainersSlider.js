import Swiper, { Navigation } from 'swiper';

export default function createSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 116,
      },
    },

    navigation: {
      nextEl: '.swiper-nav__next',
      prevEl: '.swiper-nav__prev',
    },
  });

  return swiper;
}
