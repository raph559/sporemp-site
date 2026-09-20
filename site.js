// Native links and disclosures keep the entire site usable without JavaScript.
// Only add a current-section hint; never intercept navigation or modify history.
const sections = [...document.querySelectorAll('main > section[id]')];
if ('IntersectionObserver' in window && sections.length) {
  const links = [...document.querySelectorAll('.header nav a')];
  const observer = new IntersectionObserver(entries => {
    const active = entries.find(entry => entry.isIntersecting);
    if (!active) return;
    for (const link of links) {
      if (link.hash === '#' + active.target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  for (const section of sections) observer.observe(section);
}
