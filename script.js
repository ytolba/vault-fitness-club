const root = document.documentElement;
const body = document.body;
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const year = document.querySelector('[data-year]');

year.textContent = new Date().getFullYear();

function updateThreshold() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
  root.style.setProperty('--progress', progress.toFixed(4));
}

let ticking = false;
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateThreshold();
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
  body.classList.toggle('menu-open', !isOpen);
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    body.classList.remove('menu-open');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 960) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    body.classList.remove('menu-open');
  }
});

updateThreshold();
