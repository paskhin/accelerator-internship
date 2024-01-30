import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Form } from './vendor/form-validate/form';
import { iosVhFix } from './utils/ios-vh-fix';
import { openMenu } from './open-menu';
import { openSubMenu } from './open-sub';
import { showHeader } from './header-show';
import { initSwipers } from './init-swipers';
import { openModal } from './modal';
import {CustomSelect} from './select/custom-select';
// import { selectOpen } from './select';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    openMenu();
    openSubMenu();
    showHeader();
    initSwipers();
    openModal();
    // selectOpen();
  });
});
