(() => {
  const refs = {
    openModalBtnPink: document.querySelector('[data-modal-open-pink]'),
    openModalBtnBeige: document.querySelector('[data-modal-open-beige]'),
    openModalBtnGreen: document.querySelector('[data-modal-open-green]'),
    modalPink: document.querySelector('[data-modal-pink]'),
    modalBeige: document.querySelector('[data-modal-beige]'),
    modalGreen: document.querySelector('[data-modal-green]'),
  };

  refs.openModalBtnPink.addEventListener('click', toggleModalPink);
  refs.openModalBtnBeige.addEventListener('click', toggleModalBeige);
  refs.openModalBtnGreen.addEventListener('click', toggleModalGreen);

  function toggleModalPink() {
    refs.modalPink.classList.toggle('products-list__secondary-text--hidden-pink');
  }

  function toggleModalBeige() {
    refs.modalBeige.classList.toggle('products-list__secondary-text--hidden-beige');
  }

  function toggleModalGreen() {
    refs.modalGreen.classList.toggle('products-list__secondary-text--hidden-green');
  }
})();
