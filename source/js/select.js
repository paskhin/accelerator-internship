export const select = document.querySelector('[data-select="select"]');
const selectList = document.querySelector('[data-select="select-list"]');
const selectItems = document.querySelectorAll('[data-select="select-item"]');
const selectInput = document.querySelector('[data-select="input-value"]');


export const selectOpen = () => {
  select.addEventListener('click', () => {
    selectList.classList.toggle('select__list--visible');
  });

  selectItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      select.textContent = item.textContent;
      selectInput.value = item.dataset.value;
      selectList.classList.remove('select__list--visible');
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target !== select) {
      selectList.classList.remove('select__list--visible');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      selectList.classList.remove('select__list--visible');
    }
  });
};


