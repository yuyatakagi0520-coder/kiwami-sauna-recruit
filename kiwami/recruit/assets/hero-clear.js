/* The WebGL wordmark is intentionally soft in the original effect.
   On the hero it makes the copy hard to read, so keep the particle canvas
   out of the first viewport and bring it back for Future / Way / Interview. */
(() => {
  let canvas = null;
  const update = () => {
    if (!canvas || !canvas.isConnected) {
      canvas = document.querySelector('.m-gl canvas') || document.querySelector('canvas');
    }
    if (!canvas) return;
    const hide = window.scrollY < 1100;
    canvas.style.transition = 'opacity .45s linear';
    canvas.style.opacity = hide ? '0' : '1';
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  window.addEventListener('load', update, { once: true });
  setTimeout(update, 500);
  setTimeout(update, 1500);
})();
