(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnBeige: document.querySelector('[data-modal-open-beige]'),
    openModalBtnGreen: document.querySelector('[data-modal-open-green]'),
    modal: document.querySelector('[data-modal]'),
    modalBeige: document.querySelector('[data-modal-beige]'),
    modalGreen: document.querySelector('[data-modal-green]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnBeige.addEventListener('click', toggleModalBeige);
  refs.openModalBtnGreen.addEventListener('click', toggleModalGreen);

  function toggleModal() {
    refs.modal.classList.toggle('products-list__secondary-text--hidden');
  }

  function toggleModalBeige() {
    refs.modalBeige.classList.toggle('products-list__secondary-text--hidden-beige');
  }

  function toggleModalGreen() {
    refs.modalGreen.classList.toggle('products-list__secondary-text--hidden-green');
  }
})();
