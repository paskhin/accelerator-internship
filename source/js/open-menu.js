import { subNews, navPrograms, navNews, subPrograms } from './open-sub';

const headerNav = document.querySelector('[data-header="main-nav"]');
const navToggle = document.querySelector('[data-header="button-menu"]');
const logoWrapper = document.querySelector('[data-header="logo-wrapper"]');
const wrapper = document.querySelector('[data-wrapper="wrapper"]');
const headerContainer = document.querySelector('[data-header="header-container"]');

export const closeMainMenu = () => {
  logoWrapper.classList.remove('logo-wrapper--opened');
  headerNav.classList.remove('main-nav--opened');
  subPrograms.classList.remove('sub-menu--opened');
  subNews.classList.remove('sub-menu--opened');
  navPrograms.classList.remove('site-list__item-link--active');
  navNews.classList.remove('site-list__item-link--active');
  wrapper.classList.remove('wrapper--dark');
  headerContainer.classList.remove('header-container--opened');
};

export const openMenu = () => {
  navToggle.addEventListener('click', () => {

    if (logoWrapper.classList.contains('logo-wrapper--opened')) {
      closeMainMenu();
    } else {
      logoWrapper.classList.add('logo-wrapper--opened');
      headerNav.classList.add('main-nav--opened');
      headerContainer.classList.add('header-container--opened');
    }
  });

  window.addEventListener('click', (e) => {
    const eltmentClicked = e.target;
    if (!eltmentClicked.closest('[data-header="button-menu"]') && !eltmentClicked.closest('[data-header="main-nav"]')) {
      closeMainMenu();
    }
  });
};
