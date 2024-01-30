import { select } from './select';
const modal = document.querySelector('[data-modal="form"]');
const modalButtonClose = document.querySelector('[data-modal="modal-close"]');
const modalButtonsOpen = document.querySelectorAll('[data-hero="open-modal"]');
const modalContent = document.querySelector('[data-modal="modal-wrapper"]');
const phoneInput = document.querySelector('[data-input="phone"]');
const nameInput = document.querySelector('[data-input="name"]');
// const wrapper = document.querySelector('[data-wrapper="off-scroll"]');

const clearInputs = () => {
  select.textContent = ' ';
  phoneInput.value = ' ';
  nameInput.value = ' ';
};


export const openModal = () => {

  modalButtonsOpen.forEach((item) => {
    item.addEventListener('click', () => {
      modal.classList.add('modal--opened');
    });
  });

  modalButtonClose.addEventListener('click', () => {
    modal.classList.remove('modal--opened');
    clearInputs();
  });

  document.addEventListener('click', (e) => {
    if (e.target === modalContent && modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened');
      clearInputs();
    }
  });
};
