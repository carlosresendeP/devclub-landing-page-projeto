window.DevClub = window.DevClub || {};

/**
 * Duplica os itens de cada `.logo-ticker-track` dentro do próprio track, para
 * permitir o loop infinito via `translateX(-50%)` (ver css/hero.css: a animação
 * anda exatamente a largura do primeiro conjunto e reinicia sem salto visível).
 * Os clones recebem aria-hidden para leitores de tela não anunciarem os logos 2x.
 */
window.DevClub.initMarquee = function initMarquee(root = document) {
  const tracks = root.querySelectorAll('.logo-ticker-track');

  tracks.forEach((track) => {
    const originalItems = Array.from(track.children);
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      const img = clone.tagName === 'IMG' ? clone : clone.querySelector('img');
      if (img) img.removeAttribute('alt');
      track.appendChild(clone);
    });
  });
};
