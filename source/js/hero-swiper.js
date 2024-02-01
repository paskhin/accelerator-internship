import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const paginationBlock = document.querySelector('[data-hero="hero-pagination"]');
const mediaDesk = window.matchMedia('(min-width: 1440px)');
const mediaTab = window.matchMedia('(min-width: 768px)');
const mediaMob = window.matchMedia('(min-width: 320px)');
export const initHeroSwiper = () => {
  const slides = document.querySelectorAll('[data-hero="hero-item"]');
  const slidesArr = [...slides];
  const swiper = new Swiper('[data-hero="hero-slider"]', {
    loop: true,
    modules: [Pagination],
    pagination: {
      el: '[data-hero="hero-pagination"]',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        tabindex: 0,
      },
    },
  });
  slidesArr.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });
  swiper.on('transitionEnd', () => {
    const slideActive = swiper.realIndex;
    const textesActive = document.querySelectorAll('[data-hero="content"]');
    textesActive.forEach((item, index) => {
      if (mediaTab.matches && index === slideActive || mediaDesk.matches && index === slideActive) {
        const heightTab = item.clientHeight + 60;
        paginationBlock.style.bottom = `${heightTab}px`;
      } else if (mediaMob.matches && index === slideActive){
        const height = item.clientHeight + 20;
        paginationBlock.style.bottom = `${height}px`;
      }
    }
    );
  });

};


