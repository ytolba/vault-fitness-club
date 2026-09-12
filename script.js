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

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
  nav.classList.toggle('is-open', open);
  body.classList.toggle('menu-open', open);
}

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  setMenu(!isOpen);
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    setMenu(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 960) {
    setMenu(false);
  }
});

updateThreshold();
