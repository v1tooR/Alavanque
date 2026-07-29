document.documentElement.classList.add('js');

const mobileMenu = document.getElementById('mobileMenu');
const burger = document.querySelector('.nav__burger');
const mobilePanel = mobileMenu?.querySelector('.mmenu__panel');
let menuReturnFocus = null;

function focusableItems(container) {
  return Array.from(
    container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
  ).filter((element) => element.offsetParent !== null);
}

function openMobileMenu() {
  if (!mobileMenu) return;
  menuReturnFocus = document.activeElement;
  mobileMenu.dataset.open = 'true';
  mobileMenu.inert = false;
  burger?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  window.setTimeout(() => mobileMenu.querySelector('.mmenu__close')?.focus(), 30);
}

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.dataset.open = 'false';
  mobileMenu.inert = true;
  burger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  if (mobileMenu.contains(document.activeElement)) menuReturnFocus?.focus();
}

window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;

document.addEventListener('keydown', (event) => {
  if (mobileMenu?.dataset.open !== 'true') return;
  if (event.key === 'Escape') {
    closeMobileMenu();
    return;
  }
  if (event.key !== 'Tab' || !mobilePanel) return;
  const items = focusableItems(mobilePanel);
  if (!items.length) return;
  const first = items[0];
  const last = items.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const progress = document.getElementById('scrollProgress');
const nav = document.getElementById('siteNav');
const fab = document.getElementById('fab');
const mobileCta = document.getElementById('mobileCta');
const finalCta = document.querySelector('.final-cta');
let scrollTicking = false;

function updateChrome() {
  const root = document.documentElement;
  const maxScroll = root.scrollHeight - root.clientHeight;
  const percent = maxScroll > 0 ? (root.scrollTop / maxScroll) * 100 : 0;
  if (progress) progress.style.width = `${percent}%`;
  nav?.classList.toggle('is-scrolled', root.scrollTop > 12);
  fab?.classList.toggle('is-visible', root.scrollTop > 420);

  const beforeFinalCta = !finalCta || finalCta.getBoundingClientRect().top > root.clientHeight * .58;
  const showMobileCta = root.scrollTop > 300 && beforeFinalCta;
  mobileCta?.classList.toggle('is-visible', showMobileCta);
  if (mobileCta) mobileCta.inert = !showMobileCta;
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  window.requestAnimationFrame(updateChrome);
  scrollTicking = true;
}, { passive: true });

const navTrack = document.getElementById('navTrack');
const navLamp = document.getElementById('navLamp');
const navLinks = Array.from(document.querySelectorAll('[data-navlink]'));

function moveNavLamp(target) {
  if (!target || !navTrack || !navLamp || navTrack.offsetParent === null) return;
  const trackRect = navTrack.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  navLamp.style.setProperty('--lamp-x', `${targetRect.left - trackRect.left}px`);
  navLamp.style.setProperty('--lamp-w', `${targetRect.width}px`);
}

function restoreNavLamp() {
  moveNavLamp(navLinks.find((link) => link.classList.contains('av-nav__link--active')));
}

navLinks.forEach((link) => {
  link.addEventListener('pointerenter', () => moveNavLamp(link));
  link.addEventListener('pointerleave', restoreNavLamp);
  link.addEventListener('focus', () => moveNavLamp(link));
  link.addEventListener('blur', restoreNavLamp);
});

window.requestAnimationFrame(() => {
  restoreNavLamp();
  window.requestAnimationFrame(() => navTrack?.classList.add('is-ready'));
});
document.fonts?.ready.then(restoreNavLamp);
window.addEventListener('resize', restoreNavLamp, { passive: true });

const revealTargets = Array.from(document.querySelectorAll('[data-reveal], [data-reveal-group]'));

function reveal(target) {
  target.classList.add('is-visible');
  target.querySelectorAll(':scope > *').forEach((child) => child.classList.add('is-visible'));
}

function revealAll() {
  revealTargets.forEach(reveal);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealAll();
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  revealTargets.forEach((target) => observer.observe(target));
  window.addEventListener('load', () => window.setTimeout(revealAll, 1600), { once: true });
}

updateChrome();
window.lucide?.createIcons();
