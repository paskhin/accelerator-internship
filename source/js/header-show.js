import { closeMainMenu } from './open-menu';
export const headerContainer = document.querySelector('[data-header="header-container"]');
const containHide = () => headerContainer.classList.contains('header-container--hide');
const scrollPosition = () => document.documentElement.scrollTop;
let lastScroll = 0;

export const showHeader = () => {
  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide()) {
      headerContainer.classList.add('header-container--hide');
      closeMainMenu();
    } else if (scrollPosition() < lastScroll && containHide()) {
      headerContainer.classList.remove('header-container--hide');
    }

    lastScroll = scrollPosition();
  });
};
