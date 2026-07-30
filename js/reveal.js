window.DevClub = window.DevClub || {};

/**
 * Reveal genérico via IntersectionObserver.
 * Aplica a classe `in` em qualquer elemento [data-reveal] quando ele entra no viewport.
 * Com prefers-reduced-motion, o CSS (.gs) já neutraliza a transição — aqui só garantimos
 * que a classe seja aplicada de qualquer forma para o conteúdo nunca ficar preso em opacity:0.
 */
window.DevClub.initReveal = function initReveal(root = document) {
  const targets = root.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reducedMotion) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
};
