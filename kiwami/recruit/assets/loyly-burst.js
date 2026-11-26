(() => {
  const el = document.querySelector('.loyly-burst');
  if (!el) return;
  let active = false;
  const update = () => {
    const y = window.scrollY || window.pageYOffset;
    const on = y > 1700 && y < 2850;
    if (on !== active) {
      active = on;
      el.classList.toggle('is-active', on);
      document.body.classList.toggle('is-heatwave', on);
    }
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();
