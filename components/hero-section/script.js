(function () {
  'use strict';

  /* ============== TypewriterHeading ==============
     First 67 characters render black, the rest render white,
     typed at 35ms/char, starting after a 400ms delay. */
  var TEXT = 'Unlock Top Marketing Talent You Thought Was Out of Reach -- Now Just One Click Away!';
  var SPLIT_INDEX = 67;
  var TYPE_SPEED = 35;
  var START_DELAY = 400;

  function initTypewriter() {
    var el = document.getElementById('typewriter');
    if (!el) return;

    var blackSpan = document.createElement('span');
    blackSpan.className = 'tw-black';
    var whiteSpan = document.createElement('span');
    whiteSpan.className = 'tw-white';
    var cursor = document.createElement('span');
    cursor.className = 'tw-cursor';

    el.appendChild(blackSpan);
    el.appendChild(whiteSpan);
    el.appendChild(cursor);

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      blackSpan.textContent = TEXT.slice(0, SPLIT_INDEX);
      whiteSpan.textContent = TEXT.slice(SPLIT_INDEX);
      cursor.classList.add('is-done');
      return;
    }

    var i = 0;
    var timer = null;

    function tick() {
      i += 1;
      blackSpan.textContent = TEXT.slice(0, Math.min(i, SPLIT_INDEX));
      whiteSpan.textContent = i > SPLIT_INDEX ? TEXT.slice(SPLIT_INDEX, i) : '';
      if (i >= TEXT.length) {
        clearInterval(timer);
        cursor.classList.add('is-done');
      }
    }

    window.setTimeout(function () {
      timer = window.setInterval(tick, TYPE_SPEED);
    }, START_DELAY);
  }

  /* ============== useCountUp ==============
     Animates 0 -> 20 over 2s with easeOutCubic, starting after a 1.2s delay. */
  function initCountUp() {
    var el = document.getElementById('count-number');
    if (!el) return;

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      el.textContent = '20k+';
      return;
    }

    var duration = 2000;
    var startDelay = 1200;
    var from = 0;
    var to = 20;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    window.setTimeout(function () {
      var startTime = null;

      function frame(ts) {
        if (startTime === null) startTime = ts;
        var elapsed = ts - startTime;
        var progress = Math.min(1, elapsed / duration);
        var eased = easeOutCubic(progress);
        var value = Math.round(from + (to - from) * eased);
        el.textContent = value + 'k+';
        if (progress < 1) requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    }, startDelay);
  }

  /* ============== Logo ticker ==============
     5 unique logos repeated 4x for a seamless loop (track scrolls by 25%). */
  var LOGO_URLS = [
    'https://polo-pecan-73837341.figma.site/_assets/v11/1e7b0e6fcc016cd28aec5c68990118b8c54c35a5.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/3eac03c183db2ae080d910159211c14843398b61.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/17705a4c0023a0e5a99154dfb10582adbbf4260b.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/0e5f442b09dc5c248e3e60d40a65505fb1887228.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/63f99030ceb459e3c9ab9e429cfa2353491d3816.svg'
  ];

  function initTicker() {
    var track = document.getElementById('ticker-track');
    if (!track) return;

    var html = '';
    for (var rep = 0; rep < 4; rep += 1) {
      LOGO_URLS.forEach(function (url) {
        html += '<img src="' + url + '" alt="" aria-hidden="' + (rep === 0 ? 'false' : 'true') + '" />';
      });
    }
    track.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTypewriter();
    initCountUp();
    initTicker();
  });
})();
