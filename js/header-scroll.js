export function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const setScrolled = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });
}
