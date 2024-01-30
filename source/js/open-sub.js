export const navPrograms = document.querySelector('[data-nav="programs"]');
export const navNews = document.querySelector('[data-nav="news"]');
export const subPrograms = document.querySelector('[data-sub="sub-programs"]');
export const subNews = document.querySelector('[data-sub="sub-news"]');

export const openSubMenu = () => {
  navPrograms.addEventListener('click', () => {
    if (subPrograms.classList.contains('sub-menu--opened')) {
      subPrograms.classList.remove('sub-menu--opened');
      navPrograms.classList.remove('site-list__item-link--active');
    } else {
      subPrograms.classList.add('sub-menu--opened');
      navPrograms.classList.add('site-list__item-link--active');
    }
  });

  navNews.addEventListener('click', () => {
    if (subNews.classList.contains('sub-menu--opened')) {
      subNews.classList.remove('sub-menu--opened');
      navNews.classList.remove('site-list__item-link--active');
    } else {
      subNews.classList.add('sub-menu--opened');
      navNews.classList.add('site-list__item-link--active');
    }
  });
};
