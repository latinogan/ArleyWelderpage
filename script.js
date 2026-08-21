document.addEventListener('DOMContentLoaded', () => {
  // Manejo del Loader
  const loaderWrapper = document.getElementById('loader-wrapper');
  if (loaderWrapper) {
    window.addEventListener('load', () => {
      loaderWrapper.classList.add('loader-hidden');
    });
  }

  // Manejo del Menú Hamburguesa
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('is-open')) {
          primaryNav.classList.remove('is-open');
          navToggle.classList.remove('is-active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});