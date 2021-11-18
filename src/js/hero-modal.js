(() => {
    const refs = {
        openHeroBtn: document.querySelector('[data-hero-open]'),
        closeHeroBtn: document.querySelector('[data-hero-close]'),
        modal: document.querySelector('[data-hero]'),
    };

    refs.openHeroBtn.addEventListener('click', toggleHero);
    refs.closeHeroBtn.addEventListener('click', toggleHero);

    function toggleHero() {
        refs.modal.classList.toggle('is-hidden');
    }
})();