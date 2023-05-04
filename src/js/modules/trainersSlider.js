import Swiper, { Navigation } from 'swiper';

export default function createSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 116,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-nav__next',
      prevEl: '.swiper-nav__prev',
    },
  });

  return swiper;
}
