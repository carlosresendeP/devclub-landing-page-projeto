(function () {
  function initMobileDrawer() {
    const toggle = document.querySelector('[data-menu-toggle]');
    const drawer = document.querySelector('[data-mobile-drawer]');
    if (!toggle || !drawer) return;

    const closeBtn = drawer.querySelector('[data-drawer-close]');
    const backdrop = drawer.querySelector('.mobile-drawer-backdrop');
    const focusableSelector = 'a[href], button:not([disabled])';
    let lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      drawer.setAttribute('data-open', 'true');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.setAttribute('data-drawer-locked', 'true');
      const first = drawer.querySelector(focusableSelector);
      if (first) first.focus();
      document.addEventListener('keydown', onKeydown);
    }

    function close() {
      drawer.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.removeAttribute('data-drawer-locked');
      document.removeEventListener('keydown', onKeydown);
      if (lastFocused) lastFocused.focus();
    }

    function onKeydown(e) {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = Array.from(drawer.querySelectorAll(focusableSelector));
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    toggle.addEventListener('click', () => {
      const isOpen = drawer.getAttribute('data-open') === 'true';
      if (isOpen) close();
      else open();
    });
    closeBtn && closeBtn.addEventListener('click', close);
    backdrop && backdrop.addEventListener('click', close);
    drawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.remove('no-js');

    window.DevClub.initReveal();
    window.DevClub.initMarquee();
    initMobileDrawer();

    const heroWrapper = document.querySelector('.hero-scroll-wrapper');
    if (heroWrapper && window.DevClub.HeroScrollVideo) {
      const engine = new window.DevClub.HeroScrollVideo(heroWrapper);
      engine.init();
    }
  });
})();
